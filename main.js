const elPaymentPeriodRadios = document.querySelectorAll('[name="payment_period"]')
const elPaymentPrice = document.querySelectorAll('.pricing-item-price-value') 

elPaymentPeriodRadios.forEach(radio => 
    radio.addEventListener('change', (e) => {
        const radio = e.target.value

        if(radio === 'annual') {
            elPaymentPrice.forEach((price)=>{
                price.textContent = price.closest('.pricing-item-price').dataset.priceAnnual
            })
        } else {
            elPaymentPrice.forEach((price)=>{
                price.textContent = price.closest('.pricing-item-price').dataset.priceMonthly
            })
        }
    })
)

