//Hero Banner Text Animation
const text = document.querySelector(".sec");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Discrimination?";
    }, 0);
    setTimeout(() => {
        text.textContent = "Stereotypes?";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Cultures?";
    }, 8000);
}
textLoad();
setInterval(textLoad, 12000);

//Horizontal Scroll
gsap.registerPlugin(ScrollTrigger);
const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");
let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: "+=3000"
  }
});
gsap.to(mask, {
  width: "90%",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top left",
    scrub: 1
  }
});
console.log(1 / (sections.length - 1))
sections.forEach((section) => {
  let text = section.querySelectorAll(".anim");
  if(text.length === 0)
  gsap.from(text, {
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center"
    }
  });
});

//Graph One
d3.csv('https://raw.githubusercontent.com/reinakv/DataStory/main/sa_2022.csv', function(err, rows){
function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var z_data=[ ]
for(i=0;i<5;i++)
{
  z_data.push(unpack(rows,i));
}

var data = [{
           z: z_data,
           type: 'surface'
        }];

var layout = {
  autosize: false,
  width: 500,
  height: 500,
  margin: {
    l: 65,
    r: 50,
    b: 65,
    t: 90,
  },
  plot_bgcolor: 'rgba(0, 0, 0, 0)', 
  paper_bgcolor: 'rgba(0, 0, 0, 0)'
};
Plotly.newPlot('graphone', data, layout);
});

//Graph Two
d3.csv('https://raw.githubusercontent.com/reinakv/DataStory/main/sa_2004.csv', function(err, rows){
function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var z_data=[ ]
for(i=0;i<5;i++)
{
  z_data.push(unpack(rows,i));
}

var data = [{
           z: z_data,
           type: 'surface'
        }];

var layout = {
  autosize: false,
  width: 500,
  height: 500,
  margin: {
    l: 65,
    r: 50,
    b: 65,
    t: 90,
  },
  plot_bgcolor: 'rgba(0, 0, 0, 0)', 
  paper_bgcolor: 'rgba(0, 0, 0, 0)'
};
Plotly.newPlot('graphtwo', data, layout);
});

//Horizontal Scroll
const container2 = document.querySelector(".container2");
const sections2 = gsap.utils.toArray(".container2 section");
const text2 = gsap.utils.toArray(".anim2");
const mask2 = document.querySelector(".mask1");
let scrollTween2 = gsap.to(sections2, {
  xPercent: -100 * (sections2.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container2",
    pin: true,
    scrub: 1,
    end: "+=3000"
  }
});
gsap.to(mask2, {
  width: "90%",
  scrollTrigger: {
    trigger: ".wrapper2",
    start: "top left",
    scrub: 1
  }
});
console.log(1 / (sections2.length - 1))
sections2.forEach((section) => {
  let text2 = section.querySelectorAll(".anim2");
  if(text2.length === 0)
  gsap.from(text2, {
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween2,
      start: "left center"
    }
  });
});

// Graph Three
fetch('https://raw.githubusercontent.com/reinakv/DataStory/main/rural_mean_marriage_age.csv')
  .then(response => response.text())
  .then(data => processDataGraphThree(data));

function processDataGraphThree(data) {
  const rows = data.trim().split('\n').map(row => row.split(','));
  const columns = rows[0].map((_, columnIndex) => rows.map(row => parseFloat(row[columnIndex])).slice(1));
  const traces = columns.map((column, index) => ({
    x: Array.from({ length: column.length }, (_, i) => i + 1),
    y: column,
    mode: 'lines',
    name: `Column ${index + 1}`
  }));
  const layout = {
    title: 'Rural Mean Marriage Age for Women',
    xaxis: { title: 'X-axis Label' },
    yaxis: { title: 'Y-axis Label' },
    plot_bgcolor: 'rgba(0, 0, 0, 0)', 
    paper_bgcolor: 'rgba(0, 0, 0, 0)'
  };
  Plotly.newPlot('graphthree', traces, layout);
}

// Graph Four
fetch('https://raw.githubusercontent.com/reinakv/DataStory/main/urban_mean_marriage_age.csv')
  .then(response => response.text())
  .then(data => processDataGraphFour(data));

function processDataGraphFour(data) {
  const rows = data.trim().split('\n').map(row => row.split(','));
  const columns = rows[0].map((_, columnIndex) => rows.map(row => parseFloat(row[columnIndex])).slice(1));
  const traces = columns.map((column, index) => ({
    x: Array.from({ length: column.length }, (_, i) => i + 1),
    y: column,
    mode: 'lines',
    name: `Column ${index + 1}`
  }));
  const layout = {
    title: 'Urban Mean Marriage Age for Women',
    xaxis: { title: 'X-axis Label' },
    yaxis: { title: 'Y-axis Label' },
    plot_bgcolor: 'rgba(0, 0, 0, 0)', 
    paper_bgcolor: 'rgba(0, 0, 0, 0)'
  };
  Plotly.newPlot('graphfour', traces, layout);
}

// Graph Five
var xData = [
  88.18, 87.41, 86.72, 85.95, 86.88, 87.83, 88.85, 89.75, 90.63, 91.65,
  92.54, 93.47, 94.28, 95.20, 96.12, 95.88, 95.60, 95.38, 94.93, 94.54,
  94.26, 93.84, 94.30, 94.81, 95.40, 96.03, 96.74, 97.43, 100.21, 94.88, 97.04, 99.56
];
var yData = [
  33, 33, 35, 38, 39, 41, 43, 44, 45, 46, 49, 51, 52, 53, 55, 57, 58, 59, 60, 61, 
  62, 62, 62, 62, 61, 61, 61, 63, 63, 63, 63
];
var yearData = [
  1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
  2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
  2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022
];
var trace1 = {
  x: xData,
  y: yData,
  mode: 'markers',
  type: 'scatter',
  name: 'Team A',
  text: yearData.map(String),
  marker: { 
    size: 12,
    symbol: 'circle',
    color: 'rgba(255, 127, 14, 1)'
  }
};
var data = [trace1];
var layout = {
  xaxis: {
    range: [85, 101],
    title: 'Ratio of Female to Male Youth Unemployment Rate'
  },
  yaxis: {
    range: [30, 65],
    title: 'Globalization Index'
  },
  title: 'Data Labels Hover',
  plot_bgcolor: 'rgba(0, 0, 0, 0)', 
  paper_bgcolor: 'rgba(0, 0, 0, 0)'
};
Plotly.newPlot('graphfive', data, layout);


// Graph Six
var xDataMale = [
  80.25, 80.28, 80.31, 80.32, 80.62, 80.85, 81.04, 81.19, 81.30, 81.39,
  81.31, 81.24, 81.16, 81.04, 80.88, 80.86, 80.81, 80.76, 80.71, 80.63,
  79.42, 78.17, 77.37, 76.54, 75.67, 74.74, 74.78, 74.08, 72.69, 73.04, 72.89
];

var xDataFemale = [
  90.57, 90.65, 90.74, 90.83, 90.85, 90.81, 90.77, 90.71, 90.60, 90.49,
  90.16, 89.85, 89.52, 89.15, 88.73, 88.41, 88.05, 87.72, 87.39, 86.99,
  84.99, 82.75, 81.62, 80.43, 79.10, 77.60, 77.52, 76.28, 74.88, 77.47, 77.34
];

var yDataMale = [
  78.9, 78.8, 78.7, 78.6, 79.2, 79.9, 80.5, 81.1, 81.7, 82.3,
  81.4, 80.5, 79.6, 78.7, 77.8, 78.1, 78.4, 78.7, 79.0, 79.3,
  78.8, 78.4, 77.6, 76.7, 75.9, 75.0, 74.1, 73.1, 73.6, 72.3, 72.7, 73.6
];

var yDataFemale = [
  27.8, 27.9, 28.0, 28.1, 28.5, 28.9, 29.3, 29.7, 30.1, 30.5,
  30.4, 30.3, 30.3, 30.2, 30.1, 29.9, 29.6, 29.3, 29.0, 28.8,
  27.9, 27.1, 25.9, 24.8, 23.7, 22.6, 21.5, 20.5, 23.7, 22.7, 23.0
];

var maleFemaleData = [
  "Male", "Male", "Male", "Male", "Male", "Male", "Male", "Male", "Male", "Male",
  "Male", "Male", "Male", "Male", "Male", "Male", "Male", "Male", "Male", "Male",
  "Female", "Female", "Female", "Female", "Female", "Female", "Female", "Female", "Female", "Female", "Female", "Female"
];

var yearData = [
  1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
  2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
  2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022
];

var traceMale = {
  x: xDataMale,
  y: yDataMale,
  mode: 'markers',
  type: 'scatter',
  name: 'Male',
  text: yearData.map(String),
  hoverinfo: 'text+x+y', // Show year, x, and y on hover
  marker: {
    size: 12,
    color: 'blue'
  }
};

var traceFemale = {
  x: xDataFemale,
  y: yDataFemale,
  mode: 'markers',
  type: 'scatter',
  name: 'Female',
  text: yearData.map(String),
  hoverinfo: 'text+x+y', // Show year, x, and y on hover
  marker: {
    size: 12,
    color: 'red'
  }
};

var data = [traceMale, traceFemale];

var layout = {
  xaxis: {
    title: 'Vulnerable Employment'
  },
  yaxis: {
    title: 'Labor force participation rate'
  },
  title: 'Gender-specific Labor and Employment Data',
  plot_bgcolor: 'rgba(0, 0, 0, 0)', 
  paper_bgcolor: 'rgba(0, 0, 0, 0)'
};

Plotly.newPlot('graphsix', data, layout);


//Horizontal Scroll
const container3 = document.querySelector(".container3");
const sections3 = gsap.utils.toArray(".container3 section");
const text3 = gsap.utils.toArray(".anim3");
let scrollTween3 = gsap.to(sections3, {
  xPercent: -100 * (sections3.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container3",
    pin: true,
    scrub: 1,
    end: "+=3000"
  }
});
console.log(1 / (sections3.length - 1))
sections3.forEach((section) => {
  let text3 = section.querySelectorAll(".anim3");
  if(text3.length === 0)
  gsap.from(text3, {
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween3,
      start: "left center"
    }
  });
});
