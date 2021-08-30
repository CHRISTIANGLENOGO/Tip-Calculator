class TipCalculator {
    constructor(billInput, totalPerson, displayTip, displayTotal, customInput) {
        this.billInput = billInput;
        this.totalPerson = totalPerson;
        this.displayTip = displayTip;
        this.displayTotal = displayTotal;
        this.customInput = customInput;
    }

    checking(btn){
        if(this.billInput.value === "" || this.billInput.value <= 0) return
        if(this.totalPerson.value <= 0){
            this.alert();
            return;
        }
        this.billing(btn)
    }

    alert() {
        document.querySelector(".text-alert").style.display = 'flex';
        document.querySelector(".people").style.border = "2px solid orangered";
    }

    stopAlert() {
        document.querySelector(".text-alert").style.display = "none";
        document.querySelector(".people").style.border = "none";
    }

    billing(button) {
        let tip, total;
        const bill = this.billInput.value;
        const perPerson = this.totalPerson.value;
        const custom = this.customInput.value;
        switch(button){
            case '5%':
                if(custom > 0){
                    tip = (bill * (custom / 100)) / perPerson;
                    total = (bill / perPerson) + tip;
                }else {
                    tip = (bill * (5 / 100)) / perPerson;
                    total = (bill / perPerson) + tip;
                }
                this.stopAlert();
                break;
            case '10%':
                if(custom > 0){
                    tip = (bill * (custom / 100)) / perPerson;
                    total = (bill / perPerson) + tip;
                }else {
                    tip = (bill * (10 / 100)) / perPerson;
                    total = (bill / perPerson) + tip;
                }
                this.stopAlert();
                break;
            case '15%':
                if(custom > 0){
                    tip = (bill * (custom / 100)) / perPerson;
                    total = (bill / perPerson) + tip;
                }else {
                    tip = (bill * (15 / 100)) / perPerson;
                    total = (bill / perPerson) + tip;
                }
                this.stopAlert();
                break;
            case '25%':
                if(custom > 0){
                    tip = (bill * (custom / 100)) / perPerson;
                    total = (bill / perPerson) + tip;
                }else {
                    tip = (bill * (25 / 100)) / perPerson;
                    total = (bill / perPerson) + tip;
                }
                this.stopAlert();
                break;
            case '50%':
                if(custom > 0){
                    tip = (bill * (custom / 100)) / perPerson;
                    total = (bill / perPerson) + tip;
                }else {
                    tip = (bill * (50 / 100)) / perPerson;
                    total = (bill / perPerson) + tip;
                }
                this.stopAlert();
                break;
            default:
                return
        }
        this.show(tip, total);
    }

    show(tip, total) {
        this.displayTip.innerText = `$${tip.toFixed(2)}`;
        this.displayTotal.innerText = `$${total.toFixed(2)}`;
    }

    clear() {
        this.billInput.value = '';
        this.totalPerson.value = '';
        this.customInput.value = '';
        this.displayTip.innerText = '$0.00';
        this.displayTotal.innerText = '$0.00';
        this.stopAlert();
    }
}

const billInput = document.querySelector('#tip-input');
const totalPerson = document.querySelector('#totalPerson');
const customInput = document.querySelector('#custom-input');
const tipBtn = document.querySelectorAll('.btn');
const displayTip = document.querySelector('#displayTip');
const displayTotal = document.querySelector('#displayTotal');
const reset = document.querySelector('.reset');

const tip = new TipCalculator(billInput, totalPerson, displayTip, displayTotal, customInput);


tipBtn.forEach(button => {
    button.addEventListener('click', () => {
        tip.checking(button.innerText);
        reset.style.opacity = 1;
        reset.style.pointerEvents = "auto";
    });
});

reset.addEventListener('click', () => {
    tip.clear();
});
