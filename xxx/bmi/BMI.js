let items = ['standard', 'metric']
show('standard');

function show(elementToShow) {
    for (let i = 0; i < items.length; i++) {
        let currentElement = items[i];
        for (const element of document.getElementsByClassName(currentElement)) {
            element.style.display = currentElement === elementToShow ? 'block' : 'none'
        }
    }
}

function computeBMI_s() {
    let m = document.getElementById("form-weight_m").value;
    let f = document.getElementById("form-height_s_feet").value;
    let i = document.getElementById("form-height_s_inch").value;

    let x = 703 * m / (Math.pow((f * 12 + i), 2));

    document.getElementById("form-BMI").value = x.toFixed(2);

    return x;
}

function computeBMI_m() {
    let m = document.getElementById("form-weight_m").value;
    let h = document.getElementById("form-height_m").value;

    let x = m / (Math.pow((h / 100), 2));

    document.getElementById("form-BMI").value = x.toFixed(2);

    return x;
}

function calculate() {
    let message = document.getElementById("message");
    let bmi_s = computeBMI_s();
    let bmi_m = computeBMI_m();
    if (bmi_s && bmi_m < 18.5) {
        message.innerHTML = "Underweight";
        message.style.color = "orange";
    } else if (bmi_s && bmi_m >= 18.5 && bmi_s && bmi_m <= 24.9) {
        message.innerHTML = "Normal weight";
        message.style.color = "green";
    } else if (bmi_s && bmi_m >= 25 && bmi_s && bmi_m <= 29.9) {
        message.innerHTML = "Overweight";
        message.style.color = "red";
    } else {
        message.innerHTML = "Obesity";
        message.style.color = "red";
    }

}

function normal_weight_s() {
    let BMI_min = 18.5;
    let BMI_max = 25;
    let f = document.getElementById("form-height_s_feet").value;
    let i = document.getElementById("form-height_s_inch").value;

    let x1 = 703 * BMI_min * (Math.pow((f * 12 + i), 2));
    //  let x2 = 703 * BMI_max * (Math.pow((f * 12 + i), 2));

    document.getElementsByClassName("form-weight_s_n").value = x1.toFixed(1); // + " - " + x2.toFixed(1);

    return x1;

    //  document.getElementsByClassName("form-weight_s_n").value =  (703 * BMI_min * (Math.pow((f * 12 + i), 2)))  + " - " + (703 * BMI_max * (Math.pow((f * 12 + i), 2)));

}

function normal_weight_m() {
    let BMI_min = 18.5;
    let BMI_max = 25;
    let h = document.getElementById("form-height_m").value;

    let x1 = BMI_min * (Math.pow((h / 100), 2));
    let x2 = BMI_max * (Math.pow((h / 100), 2));
    //      let y = document.getElementsByClassName("form-weight_m_n").value(x1.toFixed(1) + " - " + x2.toFixed(1));
    //      return y;
}

