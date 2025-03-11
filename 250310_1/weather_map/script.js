const url =
  "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=4127&pageNo=1&MobileOS=ETC&MobileApp=goCamping&serviceKey=5T05rWdp2keEz1PbphkhQqrDru79buw9bFaUtA2C0C5eN6D%2BG81x3eUWFbdNz799kifOJjvzr4wFsv8hMXXHyA%3D%3D&_type=json";

fetch(url)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    const data = result.response.body.items.item;

    const showPosition = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      var container = document.getElementById("map");
      var options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };

      var map = new kakao.maps.Map(container, options);

      var clusterer = new kakao.maps.MarkerClusterer({
        map: map,
        averageCenter: true,
        minLevel: 10,
      });

      // var positions = [
      //   {
      //     title: `<div style="padding: 10px; font-size:0.9rem">EZEN</div>`,
      //     latlng: new kakao.maps.LatLng(latitude, longitude),
      //   },
      //   {
      //     title: "하이미디어",
      //     latlng: new kakao.maps.LatLng(37.4987358, 127.0266779),
      //   },
      //   {
      //     title: "그린",
      //     latlng: new kakao.maps.LatLng(37.5001513, 127.0290763),
      //   },
      // ];

      let markers = [];

      for (var i = 0; i < data.length; i++) {
        var marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
          // title: positions[i].title,
        });
        function makeOverListener(map, marker, infowindow) {
          return function () {
            infowindow.open(map, marker);
          };
        }
        function makeOutListener(infowindow) {
          return function () {
            infowindow.close();
          };
        }

        markers.push(marker);
        var infowindow = new kakao.maps.InfoWindow({
          content: data[i].facltNm,
        });
        kakao.maps.event.addListener(
          marker,
          "mouseover",
          makeOverListener(map, marker, infowindow)
        );

        kakao.maps.event.addListener(
          marker,
          "mouseout",
          makeOutListener(infowindow)
        );
      }
      clusterer.addMarkers(markers);
    };

    const errorPosition = (err) => {
      alert(err.message);
    };

    window.navigator.geolocation.getCurrentPosition(
      showPosition,
      errorPosition
    );
  });
