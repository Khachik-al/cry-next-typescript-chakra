import { Box, useTheme } from '@chakra-ui/react'
import { createChart, IChartApi, HistogramSeriesPartialOptions } from 'lightweight-charts'
import { FC, useEffect, useRef, useState } from 'react'

interface Props {
  data: {
    time: string;
    value: number;
  }[],
  baseLine?: boolean
}

let handleResize: () => void
let chart: IChartApi
const ChartComp: FC<Props> = ({ data, baseLine }) => {
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
        crosshair: {
          mode: baseLine ? 0 : 1,
          vertLine: {
            color: theme.colors.grey['500'],
          },
          horzLine: {
            color: theme.colors.grey['500'],
          },
        },
        leftPriceScale: {
          autoScale: true,
          borderColor: theme.colors.grey['200'],
          alignLabels: true,
          visible: true,
        },
        rightPriceScale: {
          visible: false,
        },
        timeScale: {
          borderColor: theme.colors.grey['200'],
        },
      })
      if (baseLine) {
        const volumeSeries = chart.addHistogramSeries({
          color: theme.colors.blue['50'],
          priceFormat: {
            type: 'volume',
          },
          overlay: true,
          priceLineVisible: false,
          scaleMargins: {
            top: 0.9,
            bottom: 0,
          },
        } as HistogramSeriesPartialOptions)
        volumeSeries.setData(data)
        var baseLineSeries = chart.addBaselineSeries({
          priceScaleId: 'left',
          priceLineColor: theme.colors.grey['400'],
          topFillColor2: theme.colors.green['50'],
          topFillColor1: theme.colors.green['100'],
          bottomFillColor2: theme.colors.red['100'],
          bottomFillColor1: theme.colors.red['50'],
          baseValue: { type: 'price', price: data[data.length - 1].value },
          lineWidth: 1,
        })
        baseLineSeries.setData(data)
      } else {
        var lineSeries = chart.addLineSeries({
          priceScaleId: 'left',
          priceLineVisible: false,
          color: theme.colors.secondary_text,
          lineWidth: 2,
        })
        lineSeries.setData(data)
      }
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

export default ChartComp