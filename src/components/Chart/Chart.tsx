import { Box, useColorMode, useTheme } from '@chakra-ui/react'
import { createChart, IChartApi, HistogramSeriesPartialOptions, Time } from 'lightweight-charts'
import { FC, useEffect, useRef } from 'react'

interface Props {
  data: {
    time: Time;
    value: number;
  }[];
  baseline?: boolean;
  small?: boolean;
  redColor?: boolean;
  height?: number;
}
let chart: IChartApi

const Chart: FC<Props> = ({ data, baseline, small, height, redColor }) => {
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
            visible: !small,
            color: colorMode === 'light' ?
              theme.colors.grey['200'] :
              theme.colors.grey['600'],
          },
          vertLines: {
            visible: !small,
            color: colorMode === 'light' ?
              theme.colors.main_white :
              theme.colors.dark['400'],
          },
        },
        crosshair: {
          mode: baseline ? 0 : 1,
          vertLine: {
            visible: !small,
            color: theme.colors.grey['500'],
          },
          horzLine: {
            visible: !small,
            color: theme.colors.grey['500'],
          },
        },
        leftPriceScale: {
          autoScale: true,
          borderColor: colorMode === 'light' ?
            theme.colors.grey['200'] :
            theme.colors.grey['600'],
          alignLabels: true,
          visible: !small,
          scaleMargins: {
            top: small ? 0 : 0.1,
            bottom: small ? 0 : 0.1,
          },
        },
        rightPriceScale: {
          visible: false,
        },
        timeScale: {
          visible: !small,
          borderColor: colorMode === 'light' ?
            theme.colors.grey['200'] :
            theme.colors.grey['600'],
          timeVisible: true,
        },
        handleScroll: {
          horzTouchDrag: false,
          vertTouchDrag: false,
          mouseWheel: !small,
          pressedMouseMove: !small,
        },
        handleScale: {
          mouseWheel: !small,
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
          priceFormat: {
            type: 'price',
          },
          color: small ?
            redColor ? theme.colors.danger : theme.colors.primary['100'] :
            theme.colors.secondary_text,
          lineWidth: 2,
          lastValueVisible: false,
          crosshairMarkerVisible: !small,
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
  }, [data, baseline, theme, colorMode, redColor, small])
  return <Box ref={chartContainerRef} w='full' h={height || [380, 450]} />
}

export default Chart