// ============================================================
// LN Gadget and Phone — Contact page logic
// Handles: contact form, account-number copy button, upload UI,
// and a SIMULATED payment confirmation submission.
//
// Nothing here actually sends email or stores files — see the
// clearly marked INTEGRATION POINT comments for where to wire
// up EmailJS or a real backend later.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // 1. CONTACT FORM
  // ============================================================
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    const submitBtn = document.getElementById('cf-submit');
    const successBox = document.getElementById('cf-success');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const formData = {
        name: document.getElementById('cf-name').value.trim(),
        phone: document.getElementById('cf-phone').value.trim(),
        email: document.getElementById('cf-email').value.trim(),
        message: document.getElementById('cf-message').value.trim(),
      };

      setLoading(submitBtn, true, 'Sending...');

      // --------------------------------------------------------
      // INTEGRATION POINT — replace this simulated delay with a
      // real EmailJS call or fetch() to your backend. See the
      // HTML comment block right under this form for examples.
      //
      // emailjs.send("SERVICE_ID", "TEMPLATE_ID", formData)
      //   .then(() => showContactSuccess())
      //   .catch((err) => { ... show an error state ... });
      // --------------------------------------------------------
      setTimeout(() => {
        setLoading(submitBtn, false, 'Send Message');
        contactForm.reset();
        contactForm.hidden = false; // form stays visible
        successBox.hidden = false;
        submitBtn.hidden = true;
      }, 900);
    });
  }

  // ============================================================
  // 2. ACCOUNT NUMBER COPY BUTTON
  // ============================================================
  const copyBtn = document.getElementById('copyAccountBtn');
  const copyLabel = document.getElementById('copyBtnLabel');
  const accountNumberEl = document.getElementById('accountNumber');

  if (copyBtn && accountNumberEl) {
    copyBtn.addEventListener('click', async () => {
      const number = accountNumberEl.textContent.trim();
      try {
        await navigator.clipboard.writeText(number);
      } catch (err) {
        // Fallback for older browsers
        const temp = document.createElement('textarea');
        temp.value = number;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }
      copyLabel.textContent = 'Copied!';
      setTimeout(() => { copyLabel.textContent = 'Copy'; }, 2000);
    });
  }

  // ============================================================
  // 3. UPLOAD PROOF-OF-PAYMENT UI (file name preview)
  // ============================================================
  const proofInput = document.getElementById('pf-proof');
  const uploadText = document.getElementById('uploadText');
  const uploadDrop = document.getElementById('uploadDrop');

  if (proofInput && uploadText) {
    proofInput.addEventListener('change', () => {
      if (proofInput.files && proofInput.files[0]) {
        uploadText.textContent = `Selected: ${proofInput.files[0].name}`;
        uploadDrop.classList.add('has-file');
      } else {
        uploadText.textContent = 'Click to upload screenshot or receipt (image or PDF)';
        uploadDrop.classList.remove('has-file');
      }
    });
  }

  // ============================================================
  // 4. PAYMENT CONFIRMATION FORM (SIMULATED)
  // ============================================================
  const paymentForm = document.getElementById('paymentForm');

  if (paymentForm) {
    const submitBtn = document.getElementById('pf-submit');
    const successBox = document.getElementById('pf-success');
    const successText = document.getElementById('pf-success-text');

    paymentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!paymentForm.checkValidity()) {
        paymentForm.reportValidity();
        return;
      }

      const formData = {
        name: document.getElementById('pf-name').value.trim(),
        phone: document.getElementById('pf-phone').value.trim(),
        product: document.getElementById('pf-product').value.trim(),
        amount: document.getElementById('pf-amount').value,
        file: proofInput.files[0] || null,
      };

      setLoading(submitBtn, true, 'Submitting...');

      // --------------------------------------------------------
      // SIMULATION ONLY — no data leaves the browser right now.
      // The reference number below is generated locally purely
      // for the on-screen confirmation message.
      //
      // INTEGRATION POINT — to make this real:
      //   1. Upload formData.file to a storage service (Cloudinary,
      //      Firebase Storage, S3, or your own backend endpoint)
      //      to get a permanent file URL.
      //   2. Send formData (with the file URL, not the raw file)
      //      to the business owner, e.g.:
      //
      //      fetch('/api/payment-confirmation', {
      //        method: 'POST',
      //        body: JSON.stringify({ ...formData, fileUrl }),
      //        headers: { 'Content-Type': 'application/json' }
      //      }).then(() => showPaymentSuccess(reference));
      //
      //      — or with EmailJS (text fields only):
      //      emailjs.send("SERVICE_ID", "PAYMENT_TEMPLATE_ID", {
      //        name: formData.name, phone: formData.phone,
      //        product: formData.product, amount: formData.amount,
      //        fileUrl
      //      });
      // --------------------------------------------------------
      setTimeout(() => {
        const reference = 'LN-' + Date.now().toString().slice(-8);

        setLoading(submitBtn, false, 'Submit Payment Confirmation');
        successText.textContent =
          `Thanks, ${formData.name || 'friend'}! Your payment confirmation ` +
          `(Ref: ${reference}) has been received. We'll verify and reach out ` +
          `on WhatsApp shortly.`;

        paymentForm.reset();
        uploadText.textContent = 'Click to upload screenshot or receipt (image or PDF)';
        uploadDrop.classList.remove('has-file');
        successBox.hidden = false;
        submitBtn.hidden = true;
      }, 1100);
    });
  }

  // ============================================================
  // Helpers
  // ============================================================
  function setLoading(btn, isLoading, label) {
    if (!btn) return;
    const labelEl = btn.querySelector('.btn-label');
    if (labelEl) labelEl.textContent = label;
    btn.disabled = isLoading;
    btn.style.opacity = isLoading ? '0.7' : '1';
    btn.style.cursor = isLoading ? 'not-allowed' : 'pointer';
  }

});