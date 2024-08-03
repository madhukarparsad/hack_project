function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (dob) {
        const dobDate = new Date(dob);
        const now = new Date();

        let years = now.getFullYear() - dobDate.getFullYear();
        let months = now.getMonth() - dobDate.getMonth();
        let days = now.getDate() - dobDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        document.getElementById('result').innerText = `Your age is: ${years} years, ${months} months, and ${days} days`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid date of birth';
    }
}