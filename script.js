document.addEventListener('DOMContentLoaded', () => {
    const proposalForm = document.getElementById('proposalForm');
    const proposalInput = document.getElementById('proposalInput');
    const submittedProposals = document.getElementById('submittedProposals');

    let proposals = JSON.parse(localStorage.getItem('submittedProposals')) || [];

    function saveProposals() {
        localStorage.setItem('submittedProposals', JSON.stringify(proposals));
    }

    function renderProposals() {
        submittedProposals.innerHTML = '';
        proposals.forEach((proposal) => {
            const proposalItem = document.createElement('li');
            proposalItem.textContent = proposal;
            submittedProposals.appendChild(proposalItem);
        });
    }

    proposalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const proposalText = proposalInput.value.trim();
        if (proposalText) {
            proposals.push(proposalText);
            saveProposals();
            renderProposals();
            proposalInput.value = '';
        }
    });

    renderProposals();
});
