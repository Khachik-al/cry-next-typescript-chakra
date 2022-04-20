import { Box, useColorMode, useTheme } from '@chakra-ui/react'
import { createChart, IChartApi, HistogramSeriesPartialOptions } from 'lightweight-charts'
import { FC, useEffect, useRef } from 'react'

interface Props {
  data: {
    time: string;
    value: number;
  }[],
  baseline?: boolean,
}
let chart: IChartApi

const Chart: FC<Props> = ({ data, baseline }) => {
  const theme = useTheme()
  const { colorMode } = useColorMode()
  const chartContainerRef = useRef<HTMLDivElement>(null)

  const handleResize = () => {
    if (!!chartContainerRef.current) {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth })
    }
    chart.timeScale().fitContent()
  }
  useEffect(() => {
    if (!!chartContainerRef.current) {
      chart = createChart(chartContainerRef.current, {
        layout: {
          backgroundColor: colorMode === 'light' ?
            theme.colors.main_white :
            theme.colors.dark['400'],
          textColor: theme.colors.secondary_text,
        },
        grid: {
          horzLines: {
            color: colorMode === 'light' ?
              theme.colors.grey['200'] :
              theme.colors.grey['600'],
          },
          vertLines: {
            color: colorMode === 'light' ?
              theme.colors.main_white :
              theme.colors.dark['400'],
          },
        },
        crosshair: {
          mode: baseline ? 0 : 1,
          vertLine: {
            color: theme.colors.grey['500'],
          },
          horzLine: {
            color: theme.colors.grey['500'],
          },
        },
        leftPriceScale: {
          autoScale: true,
          borderColor: colorMode === 'light' ?
            theme.colors.grey['200'] :
            theme.colors.grey['600'],
          alignLabels: true,
          visible: true,
          scaleMargins: {
            top: 0.1,
            bottom: 0.1,
          },
        },
        rightPriceScale: {
          visible: false,
        },
        timeScale: {
          borderColor: colorMode === 'light' ?
            theme.colors.grey['200'] :
            theme.colors.grey['600'],
        },
        handleScroll: {
          horzTouchDrag: false,
          vertTouchDrag: false,
        },
      })
      if (baseline) {
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
          lastValueVisible: false,
        } as HistogramSeriesPartialOptions)
        volumeSeries.setData(data)
        var baselineSeries = chart.addBaselineSeries({
          priceScaleId: 'left',
          priceLineColor: theme.colors.grey['400'],
          topFillColor2: theme.colors.green['50'],
          topFillColor1: theme.colors.green['100'],
          bottomFillColor2: theme.colors.red['100'],
          bottomFillColor1: theme.colors.red['50'],
          baseValue: { type: 'price', price: data[data.length - 1].value },
          lineWidth: 1,
        })
        baselineSeries.setData(data)
      } else {
        var lineSeries = chart.addLineSeries({
          priceScaleId: 'left',
          priceLineVisible: false,
          color: theme.colors.secondary_text,
          lineWidth: 2,
          lastValueVisible: false,
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
  }, [data, baseline, theme, colorMode])
  return <Box ref={chartContainerRef} w='full' h={[380, 450]} />

}

export default Chart