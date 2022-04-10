// Test -------------------- Import Packages from React -------------------

// Test -------------------- The styling to be applied ---------------------
import styles from "./BMIChart.module.css";

// Test ------------------- Import Packages -------------------------------
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Test -------------------- Components to be used in here -----------------

// Test -------------------- The current Component -------------------------
const BMIChart = (props) => {

    ChartJS.register(ArcElement, Tooltip, Legend);

    // The data that we are gonna use in the Speedometers
    const data = {
        labels: ['Underweight', 'Normal', 'Overweight', "Moderately Obese", "Extremely Obese"],
        datasets: [{
            label: 'Weekly Sales',
            data: [20, 20, 20, 20, 20],
            backgroundColor: [
                '#9ab8ff',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 0.8)',
                "#FF9F45",
                "#FD5D5D",
            ],

            // The needle value will be the sum of the data
            needleValue: props.bmi,

            borderColor: "white",
            borderWidth: 1,

            // Thickness of the chart (100% - 95%)
            cutout: "95%",
            // The total part of the chart which we wanna display
            circumference: 180,
            // Rotation of the chart
            rotation: 270,
        }]
    };

    // The code for creating the gaugeNeedle
    const gaugeNeedle = {
        id: "gaugeNeedle",

        afterDatasetDraw(chart, args, options) {
            const { ctx, config, data, chartArea: { top, bottom, left, right, width, height } } = chart;

            ctx.save();
            // console.log(data);

            let needleValue = data.datasets[0].needleValue;
            let originalBMI = needleValue;
            // let randomValue = Math.random() * 20;

            // Different Conditions for the BMI Chart
            if (needleValue <= 18.5) {
                needleValue = (needleValue / 18.5) * 20;
            } else if (needleValue <= 24.5) {
                needleValue = (20) + ((needleValue - 18.5) / 6) * 20;
            } else if (needleValue <= 29.5) {
                needleValue = (40) + ((needleValue - 24.5) / 5) * 20;
            } else if (needleValue <= 34.5) {
                needleValue = (60) + ((needleValue - 29.5) / 5) * 20;
            } else if (needleValue <= 40) {
                needleValue = (80) + ((needleValue - 34.5) / 5.5) * 20;
            } else if (needleValue > 40) {
                needleValue = 80 + ((needleValue - 34.5) / (needleValue - 34.5 + 50)) * 20;
            }

            const dataTotal = data.datasets[0].data.reduce((a, b) => a + b, 0);
            // console.log(dataTotal + " " + needleValue);

            const angle = Math.PI + (1 / dataTotal * needleValue * Math.PI);
            // console.log(angle);

            const cx = width / 2;
            const cy = chart._metasets[0].data[0].y;

            // To draw the needle
            ctx.translate(cx, cy);
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.moveTo(0, -2);
            ctx.lineTo(height - 25, 0);
            ctx.lineTo(0, 2);
            ctx.fillStyle = "#444";
            ctx.fill();
            ctx.restore();

            // To draw the dot for the needle
            ctx.beginPath();
            ctx.arc(cx, cy, 6, 0, 6);
            ctx.fill();
            ctx.restore();

            // To write the text below the needle
            ctx.font = "20px sans-serif";
            ctx.fillStyle = "#444";
            ctx.fillText("BMI : " + Math.round(originalBMI * 100) / 100, cx, cy - 135);
            ctx.textAlign = "center";
            ctx.restore();
        }
    }

    ChartJS.register(gaugeNeedle);

    let options = {
        responsive: true,
        plugins: {
            tooltip: {
                yAlign: "bottom",
                displayColors: false,
                callbacks: {
                    label: function (tooltipItem, data, value) {
                        const BMI = (tooltipItem.dataset.needleValue);
                        return `BMI: ${BMI}`;
                    }
                }
            }
        }
    }

    // console.log(props.bmi);

    return (
        <div className={`${styles["chartCard"]}`}>
            <div className={`${styles["chartBox"]}`}>
                <Doughnut data={data} options={options} plugins={gaugeNeedle}></Doughnut>
            </div>
        </div>

    );
}

// Test -------------------- Exporting the Current Component ---------------
export default BMIChart;