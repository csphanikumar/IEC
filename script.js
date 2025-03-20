document.addEventListener("DOMContentLoaded", function () {
    // Main FAQ Toggle
    const mainQuestions = document.querySelectorAll(".faq-question");

    mainQuestions.forEach(question => {
        question.addEventListener("click", function () {
            const faqItem = this.parentElement;
            const answer = faqItem.querySelector(".faq-answer");

            if (faqItem.classList.contains("active")) {
                faqItem.classList.remove("active");
                answer.style.maxHeight = null;
            } else {
                faqItem.classList.add("active");
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // Sub-FAQ Toggle
    const subQuestions = document.querySelectorAll(".sub-question");

    subQuestions.forEach(subQ => {
        subQ.addEventListener("click", function () {
            const subItem = this.nextElementSibling;
            
            if (subItem.style.maxHeight) {
                subItem.style.maxHeight = null;
            } else {
                subItem.style.maxHeight = subItem.scrollHeight + "px";
            }
        });
    });
});
