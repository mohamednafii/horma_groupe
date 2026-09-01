import React, { FormEvent } from 'react';
import {
  CircleCheckBig,
  Home as HomeIcon,
  LockKeyhole,
  MapPin,
  Phone,
  UserRound,
} from 'lucide-react';
import { Button } from '@/components/landing-mouad/ui/button';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/landing-mouad/ui/field';
import { Input } from '@/components/landing-mouad/ui/input';
import { Offer } from '@/data/al-hurra/types';

export type FormErrors = Partial<
  Record<'fullName' | 'phone' | 'city' | 'address' | 'submit', string>
>;

export type SubmittedOrder = {
  reference: string;
  customer: string;
  quantity: number;
  price: number;
};

interface OrderFormProps {
  selectedOffer: Offer;
  formErrors: FormErrors;
  submittedOrder: SubmittedOrder | null;
  /** True while the order is being sent, so the button can't be double-fired. */
  isSubmitting?: boolean;
  onClearError: (field: keyof FormErrors) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function OrderForm({
  selectedOffer,
  formErrors,
  submittedOrder,
  isSubmitting = false,
  onClearError,
  onSubmit,
}: OrderFormProps) {
  const totalPayable = selectedOffer.price + (selectedOffer.deliveryFee ?? 0);

  return (
    <section
      className="form-column rounded-xl border border-[#ecd9c2] bg-white p-4 sm:p-5 lg:col-start-1 lg:row-start-1"
      dir="rtl"
    >
      <h2 className="text-center text-[1.45rem] font-black text-[#35251d]">
        اطلبي الآن واستلمي طلبك بسرعة
      </h2>
      <p className="mt-1 text-center text-xs text-[#74665c]">
        يرجى ملء الاستمارة التالية بدقة
      </p>

      <div className="mt-4 flex items-center justify-between gap-3 rounded-lg bg-[#fcf4e8] px-4 py-3">
        <div>
          <span className="block text-[10px] font-bold text-[#78501f]">
            العرض المختار
          </span>
          <strong className="text-sm text-[#3a291f]">
            {selectedOffer.name}
          </strong>
        </div>
        <div className="text-left text-xs leading-5">
          <span className="block text-[11px] text-[#74665c]">
            ثمن المنتج: <span dir="ltr">{selectedOffer.price} DH</span>
          </span>
          <span className="block text-[11px] text-[#74665c]">
            التوصيل:{' '}
            {selectedOffer.deliveryFee && selectedOffer.deliveryFee > 0 ? (
              <span dir="ltr">{selectedOffer.deliveryFee} DH</span>
            ) : (
              'مشمول'
            )}
          </span>
          <strong className="block text-sm sm:text-base font-black text-[#b96c05]">
            المجموع: <span dir="ltr">{totalPayable} DH</span>
          </strong>
        </div>
      </div>

      <form className="mt-5" onSubmit={onSubmit} noValidate>
        <input
          type="hidden"
          name="quantity"
          value={selectedOffer.quantity}
          readOnly
        />
        <input
          type="hidden"
          name="price"
          value={totalPayable}
          readOnly
        />

        <FieldGroup className="gap-3.5">
          <Field data-invalid={Boolean(formErrors.fullName)}>
            <FieldLabel htmlFor="fullName" className="text-xs font-bold">
              الاسم الكامل
            </FieldLabel>
            <div className="relative">
              <UserRound className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#6e5e53]" />
              <Input
                id="fullName"
                name="fullName"
                autoComplete="name"
                placeholder="اكتبي اسمك الكامل"
                aria-invalid={Boolean(formErrors.fullName)}
                aria-describedby={
                  formErrors.fullName ? 'fullName-error' : undefined
                }
                onInput={() => onClearError('fullName')}
                className="h-12 rounded-lg border-[#e4d2bb] bg-[#fffefa] pr-10 text-base placeholder:text-xs"
              />
            </div>
            <FieldError id="fullName-error">
              {formErrors.fullName}
            </FieldError>
          </Field>

          <Field data-invalid={Boolean(formErrors.phone)}>
            <FieldLabel htmlFor="phone" className="text-xs font-bold">
              رقم الهاتف
            </FieldLabel>
            <div className="relative">
              <Phone className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#6e5e53]" />
              <Input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="06 XX XX XX XX"
                dir="ltr"
                aria-invalid={Boolean(formErrors.phone)}
                aria-describedby={formErrors.phone ? 'phone-error' : undefined}
                onInput={() => onClearError('phone')}
                className="h-12 rounded-lg border-[#e4d2bb] bg-[#fffefa] px-10 text-left text-base placeholder:text-xs"
              />
            </div>
            <FieldError id="phone-error">{formErrors.phone}</FieldError>
          </Field>

          <Field data-invalid={Boolean(formErrors.city)}>
            <FieldLabel htmlFor="city" className="text-xs font-bold">
              المدينة
            </FieldLabel>
            <div className="relative">
              <MapPin className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#6e5e53]" />
              <Input
                id="city"
                name="city"
                autoComplete="address-level2"
                placeholder="مثال: الدار البيضاء"
                aria-invalid={Boolean(formErrors.city)}
                aria-describedby={formErrors.city ? 'city-error' : undefined}
                onInput={() => onClearError('city')}
                className="h-12 rounded-lg border-[#e4d2bb] bg-[#fffefa] pr-10 text-base placeholder:text-xs"
              />
            </div>
            <FieldError id="city-error">{formErrors.city}</FieldError>
          </Field>

          <Field data-invalid={Boolean(formErrors.address)}>
            <FieldLabel htmlFor="address" className="text-xs font-bold">
              العنوان الكامل
            </FieldLabel>
            <div className="relative">
              <HomeIcon className="pointer-events-none absolute right-3 top-4 size-4 text-[#6e5e53]" />
              <textarea
                id="address"
                name="address"
                autoComplete="street-address"
                rows={2}
                placeholder="اكتبي عنوانك بالتفصيل (الزنقة، الحي، رقم المنزل...)"
                aria-invalid={Boolean(formErrors.address)}
                aria-describedby={
                  formErrors.address ? 'address-error' : undefined
                }
                onInput={() => onClearError('address')}
                className="min-h-20 w-full resize-none rounded-lg border border-[#e4d2bb] bg-[#fffefa] py-3 pl-3 pr-10 text-base outline-none transition placeholder:text-xs focus-visible:border-[#c47a0a] focus-visible:ring-3 focus-visible:ring-[#c47a0a]/20 aria-invalid:border-[#b42318]"
              />
            </div>
            <FieldError id="address-error">
              {formErrors.address}
            </FieldError>
          </Field>
        </FieldGroup>

        {submittedOrder && (
          <div
            id="order-confirmation"
            role="status"
            aria-live="polite"
            className="mt-4 rounded-lg border border-[#91d69c] bg-[#effbf1] p-4 text-sm text-[#205c2b]"
          >
            <div className="flex items-start gap-2">
              <CircleCheckBig className="mt-0.5 size-5 shrink-0" />
              <div>
                <strong className="block">تم تسجيل طلبك بنجاح</strong>
                <span className="mt-1 block text-xs leading-5">
                  شكراً {submittedOrder.customer}. طلبك{' '}
                  <span dir="ltr">{submittedOrder.reference}</span> يتضمن{' '}
                  {submittedOrder.quantity} عبوة بقيمة{' '}
                  <span dir="ltr">{submittedOrder.price} DH</span>. سيتم التواصل
                  معك لتأكيد التوصيل.
                </span>
              </div>
            </div>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="mt-5 h-14 w-full rounded-lg bg-gradient-to-b from-[#49bc57] to-[#29983a] text-xl font-black text-white shadow-[0_9px_22px_rgba(40,147,56,.18)] hover:brightness-105 disabled:opacity-70"
        >
          <LockKeyhole className="size-5" aria-hidden="true" />
          {isSubmitting ? (
            'جاري الإرسال…'
          ) : (
            <>
              تأكيد الطلب — <span dir="ltr">{totalPayable} DH</span>
            </>
          )}
        </Button>

        {/* Only rendered when sending actually failed, so the default layout
            is unchanged. */}
        {formErrors.submit && (
          <p
            role="alert"
            className="mt-3 rounded-lg border border-[#e6b3ad] bg-[#fdecea] px-3 py-2 text-center text-xs font-semibold text-[#b42318]"
          >
            {formErrors.submit}
          </p>
        )}
        <FieldDescription className="mt-2 text-center text-[10px] text-[#665950]">
          لن يتم استخدام معلوماتك إلا لتأكيد الطلب والتوصيل
        </FieldDescription>
      </form>
    </section>
  );
}
