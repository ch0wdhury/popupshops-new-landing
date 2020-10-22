  $(document).ready(function () {
    $(".brand-logo-clickable-1").click(function () {
      $(".testimonial-text-content h5").text("Working with the POP UP SHOPS team turned our relationship with the landlords into something very easy and smooth.");
            $('.brand-logo-testimonial-btn').removeClass('clicked-logo') //Clear all checked class
            $(this).addClass('clicked-logo') //Add checked class to current
    });
    $(".brand-logo-clickable-2").click(function () {
      $(".testimonial-text-content h5").text("Working with the POP UP SHOPS team turned our relationship with the markets into something very easy and smooth.");
            $('.brand-logo-testimonial-btn').removeClass('clicked-logo') //Clear all checked class
            $(this).addClass('clicked-logo') //Add checked class to current
    });
    $(".brand-logo-clickable-3").click(function () {
      $(".testimonial-text-content h5").text("Working with the POP UP SHOPS team turned our relationship with the markets into something very easy and smooth.");
            $('.brand-logo-testimonial-btn').removeClass('clicked-logo') //Clear all checked class
            $(this).addClass('clicked-logo') //Add checked class to current
    });
    $(".brand-logo-clickable-4").click(function () {
      $(".testimonial-text-content h5").text("Working with the POP UP SHOPS team turned our relationship with the landlords into something very easy and smooth.");
            $('.brand-logo-testimonial-btn').removeClass('clicked-logo') //Clear all checked class
            $(this).addClass('clicked-logo') //Add checked class to current
    });
    $(".brand-logo-clickable-5").click(function () {
      $(".testimonial-text-content h5").text("Working with the POP UP SHOPS team turned our relationship with the markets into something very smooth and easy.");
            $('.brand-logo-testimonial-btn').removeClass('clicked-logo') //Clear all checked class
            $(this).addClass('clicked-logo') //Add checked class to current
    });
    $(".brand-logo-clickable-6").click(function () {
      $(".testimonial-text-content h5").text("Working with the POP UP SHOPS team turned our relationship with the markets into something very hard and strong.");
            $('.brand-logo-testimonial-btn').removeClass('clicked-logo') //Clear all checked class
            $(this).addClass('clicked-logo') //Add checked class to current
    });
  });

  //Donut Chart Configure

    var randomScalingFactor = function() {
      return Math.round(Math.random() * 100);
    };

    var config = {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [
            20.2, 43.4, 20.2, 5, 4.8, 5.2
          ],
          backgroundColor: [
                'rgb(228, 146, 110)',
                'rgb(24, 188, 156)',
                'rgb(251, 238, 194)',
                'rgb(246, 203, 183)',
                'rgb(209, 209, 180)',
                'rgb(234, 234, 231)'
          ],
          label: 'Dataset 1'
        }],
        labels: [
          'Rent',
          'Staff',
          'Furniture',
          'Marketing & Payment System',
          'Other',
          'Legal Costs'
        ]
      },
      options: {
        responsive: true,
        borderWidth: 40,
        cutoutPercentage: 45,
        weight: 40,
        hover: false,
        tooltips: false,
        legend: {
          display: false,
        },
        animation: {
          animateScale: false,
          animateRotate: true
        }
      }
    };

    window.onload = function() {
      var ctx = document.getElementById('chart-area').getContext('2d');
      window.myDoughnut = new Chart(ctx, config);
    };

    document.getElementById('randomizeData').addEventListener('click', function() {
      config.data.datasets.forEach(function(dataset) {
        dataset.data = dataset.data.map(function() {
          return randomScalingFactor();
        });
      });

      window.myDoughnut.update();
    });

    var colorNames = Object.keys(window.chartColors);
    document.getElementById('addDataset').addEventListener('click', function() {
      var newDataset = {
        backgroundColor: [],
        data: [],
        label: 'New dataset ' + config.data.datasets.length,
      };

      for (var index = 0; index < config.data.labels.length; ++index) {
        newDataset.data.push(randomScalingFactor());

        var colorName = colorNames[index % colorNames.length];
        var newColor = window.chartColors[colorName];
        newDataset.backgroundColor.push(newColor);
      }

      config.data.datasets.push(newDataset);
      window.myDoughnut.update();
    });

    document.getElementById('addData').addEventListener('click', function() {
      if (config.data.datasets.length > 0) {
        config.data.labels.push('data #' + config.data.labels.length);

        var colorName = colorNames[config.data.datasets[0].data.length % colorNames.length];
        var newColor = window.chartColors[colorName];

        config.data.datasets.forEach(function(dataset) {
          dataset.data.push(randomScalingFactor());
          dataset.backgroundColor.push(newColor);
        });

        window.myDoughnut.update();
      }
    });

    document.getElementById('removeDataset').addEventListener('click', function() {
      config.data.datasets.splice(0, 1);
      window.myDoughnut.update();
    });

    document.getElementById('removeData').addEventListener('click', function() {
      config.data.labels.splice(-1, 1); // remove the label first

      config.data.datasets.forEach(function(dataset) {
        dataset.data.pop();
        dataset.backgroundColor.pop();
      });

      window.myDoughnut.update();
    });

    document.getElementById('changeCircleSize').addEventListener('click', function() {
      if (window.myDoughnut.options.circumference === Math.PI) {
        window.myDoughnut.options.circumference = 2 * Math.PI;
        window.myDoughnut.options.rotation = -Math.PI / 2;
      } else {
        window.myDoughnut.options.circumference = Math.PI;
        window.myDoughnut.options.rotation = -Math.PI;
      }

      window.myDoughnut.update();
    });
