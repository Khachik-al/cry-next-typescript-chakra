import { Box, useTheme } from '@chakra-ui/react'
import { createChart, IChartApi } from 'lightweight-charts'
import { FC, useEffect, useRef, useState } from 'react'

interface Props {
  data: {
    time: string;
    value: number;
  }[]
}

let handleResize: () => void
let chart: IChartApi
const NftChart: FC<Props> = ({ data }) => {
  const theme = useTheme()
  const [chartContainer, setChartContainer] = useState<HTMLElement | null>()
  const chartContainerRef = useRef(null)
  setChartContainer(chartContainerRef.current)

  useEffect(() => {
    if (chartContainer) {
      handleResize = () => {
        chart.applyOptions({ width: chartContainer.clientWidth })
        chart.timeScale().fitContent()
      }
      chart = createChart(chartContainer, {
        layout: {
          backgroundColor: theme.colors.main_white,
          textColor: theme.colors.secondary_text,
        },
        grid: {
          horzLines: {
            color: theme.colors.grey['200'],
          },
          vertLines: {
            color: theme.colors.main_white,
          },
        },
        leftPriceScale: {
          autoScale: true,
          borderColor: theme.colors.grey['200'],
          alignLabels: true,
          visible: true,
          drawTicks: false,
        },
        rightPriceScale: {
          visible: false,
        },
        timeScale: {
          borderColor: theme.colors.grey['200'],
        },
      })
      var series = chart.addLineSeries({
        priceScaleId: 'left',
        priceLineVisible: false,
        color: theme.colors.secondary_text,
        lineWidth: 2,
      })
      series.setData(data)
      window.addEventListener('resize', handleResize)
      chart.timeScale().fitContent()
    }
    return () => {
      window.removeEventListener('resize', handleResize)
      if (chart) { chart.remove() }
    }
  })
  return <Box ref={chartContainerRef} w='full' h={500} />
}

export default NftChart