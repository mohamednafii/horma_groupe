"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { useOrderState } from "../OrderStateProvider";
import type { OrderPayload } from "../types";
import { Icon } from "../ui/icons";
import shared from "../styles/shared.module.css";
import styles from "../styles/order.module.css";
import { PriceSummary } from "./PriceSummary";
import { QuantitySelector } from "./QuantitySelector";

/** Cash-on-delivery order form: contact fields, quantity, totals and submit. */
export function OrderForm() {
  const { content, packIndex, quantity, productPrice, deliveryFee, total } = useOrderState();
  const { config, orderCopy, packs } = content;
  // Invalid fields are only highlighted after the first submit attempt.
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setValidated(true);

    if (!form.checkValidity()) {
      form.querySelector<HTMLInputElement>(":invalid")?.focus();
      return;
    }

    const data = new FormData(form);
    const read = (key: string) => String(data.get(key) ?? "").trim();

    const order: OrderPayload = {
      phone: read("phone"),
      name: read("name"),
      city: read("city"),
      address: read("address"),
      pack: packIndex + 1,
      packLabel: packs[packIndex].name,
      quantity,
      productPrice,
      deliveryFee,
      total,
      currency: "MAD",
      payment: "cash_on_delivery",
    };

    setSubmitted(true);

    if (!config.orderEndpoint) {
      // Parity with the source page: no back end is wired up yet.
      console.info("[al-hurra] order", order);
      return;
    }

    void fetch(config.orderEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    }).catch((error: unknown) => {
      console.error("[al-hurra] order submission failed", error);
    });
  }

  return (
    <form
      className={[styles.form, validated ? styles.formValidated : null].filter(Boolean).join(" ")}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className={styles.fieldRow}>
        <input
          className={styles.field}
          type="tel"
          name="phone"
          placeholder={orderCopy.fields.phone}
          aria-label={orderCopy.fields.phone}
          autoComplete="tel"
          inputMode="tel"
          pattern="[0-9+\s-]{9,}"
          required
        />
        <input
          className={styles.field}
          type="text"
          name="name"
          placeholder={orderCopy.fields.name}
          aria-label={orderCopy.fields.name}
          autoComplete="name"
          required
        />
      </div>

      <div className={styles.fieldRow}>
        <input
          className={styles.field}
          type="text"
          name="city"
          placeholder={orderCopy.fields.city}
          aria-label={orderCopy.fields.city}
          autoComplete="address-level2"
          required
        />
        <input
          className={styles.field}
          type="text"
          name="address"
          placeholder={orderCopy.fields.address}
          aria-label={orderCopy.fields.addressAria}
          autoComplete="street-address"
        />
      </div>

      <QuantitySelector />
      <PriceSummary />

      <button type="submit" className={shared.btnPrimary}>
        <Icon name="lock" size={19} stroke="var(--white)" strokeWidth={1.8} />
        <span>{orderCopy.submit}</span>
      </button>

      <p className={styles.confirm} role="status" hidden={!submitted}>
        {orderCopy.confirmation}
      </p>
    </form>
  );
}
