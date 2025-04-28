import { useQuery } from "@tanstack/react-query";
import { useParams, useOutletContext } from "react-router-dom";
import styled from "styled-components";
// 리액트-에이펙스차트에서 끌고와야됨
import ApexCharts from "react-apexcharts";
import { fetchCoinHistory } from "../api";

const Container = styled.div`
  margin-top: 10px;
`;

interface CoinHistory {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

const Chart = () => {
  const { coinId } = useParams();
  // 코인 히스토리 타입 객체들이 여러개 모여있는 배열이니까 여기서는 배열로 선언
  const { isLoading, data } = useQuery<CoinHistory[]>({
    queryKey: ["history", coinId],
    queryFn: () => fetchCoinHistory(coinId),
    // refetchInterval: 5000,
  });

  const test = useOutletContext();
  console.log(test);

  // 데이터 로딩오류 방지
  const chartData = Array.isArray(data) && data.length > 0 ? data : [];

  console.log(chartData);

  return (
    <Container>
      {isLoading ? (
        <div>Loading Start...</div>
      ) : chartData.length > 0 ? (
        <ApexCharts
          width={600}
          type="line"
          options={{
            theme: {
              // mode: isDark ? "dark" : "light",
            },
            stroke: {
              width: 4,
              curve: "smooth",
            },
            chart: {
              toolbar: {
                show: false,
              },
              background: "linear-gradient(to top, #5ee7df 0%, #b490ca 100%)",
            },
            grid: {
              show: false,
            },
            xaxis: {
              labels: {
                show: true,
                style: { fontSize: "12px" },
              },
            },
            colors: ["#fff"],
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["#005bea"],
              },
            },
          }}
          series={[
            {
              name: "hhh",
              data: chartData.map((price) => parseFloat(price.close)),
            },
          ]}
        />
      ) : (
        "No data"
      )}
    </Container>
  );
};

export default Chart;
