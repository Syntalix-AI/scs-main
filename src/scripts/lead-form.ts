// Progressive enhancement for every form[data-lead-form]: submit with fetch, show inline status, send the GA4 key event.
// A no-JS submission that failed comes back as ?error=1; say so on the first form on the page.
if (new URLSearchParams(location.search).has('error')) {
  const s = document.querySelector<HTMLElement>('form[data-lead-form] .lf__status');
  if (s) { s.hidden = false; s.dataset.state = 'error'; s.textContent = 'That did not go through. Please check your name and email, or write to info@syntalixconsultancy.com.'; }
}
document.querySelectorAll<HTMLFormElement>('form[data-lead-form]').forEach((form) => {
  if (form.dataset.bound) return;
  form.dataset.bound = '1';
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = form.querySelector<HTMLElement>('.lf__status');
    const btn = form.querySelector<HTMLButtonElement>('button[type=submit]');
    if (btn) btn.disabled = true;
    const show = (state: string, text: string) => { if (status) { status.hidden = false; status.dataset.state = state; status.textContent = text; } };
    show('busy', 'Sending…');
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please email info@syntalixconsultancy.com instead.');
      show('ok', 'Thanks. Your message is in and we will reply within 24 hours.');
      form.reset();
      const source = (form.elements.namedItem('source') as HTMLInputElement | null)?.value ?? 'site';
      (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.('event', 'generate_lead', { form_source: source });
    } catch (err) {
      show('error', (err as Error).message);
    } finally {
      if (btn) btn.disabled = false;
    }
  });
});
