const agreeCheck = document.getElementById('agreeCheck');
const agreeBtn = document.getElementById('agreeBtn');

agreeCheck.addEventListener('change', () => {
const enabled = agreeCheck.checked;
    agreeBtn.disabled = !enabled;
    agreeBtn.classList.toggle('enabled', enabled);
});

agreeBtn.addEventListener('click', () => {
    if (agreeCheck.checked) {
        const modalEl = document.getElementById('termsModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();
    }
});