import { format } from 'date-fns'
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  Tooltip,
  XYChart,
} from '@visx/xychart'
import { FC } from 'react'
import { VStack, Text, useTheme } from '@chakra-ui/react'

type TData = {
  x: string;
  y: number;
}

interface Props {
  data: TData[]
}


const accessors = {
  xAccessor: (d: TData) => new Date(d.x),
  yAccessor: (d: TData) => d.y,
}

const LineChart: FC<Props> = ({ data }) => {
  const theme = useTheme()

  return (
    data && <div>
			<XYChart
				height={400}
				margin={{ left: 40, top: 35, bottom: 38, right: 0 }}
				xScale={{ type: 'time' }}
				yScale={{ type: 'radial' }}
			>
				<AnimatedGrid
					columns={false}
					lineStyle={{
					  stroke: theme.colors.grey.light,
					  strokeLinecap: 'round',
					  strokeWidth: 1,
					}}
				/>
				<AnimatedAxis
					orientation='bottom'
					tickLabelProps={() => ({ dy: 10 })}
					numTicks={7}
					stroke={theme.colors.grey.light}
					strokeWidth='1'

				/>
				<AnimatedAxis
					orientation='left'
					numTicks={6}
					tickLabelProps={() => ({ dx: -10 })}
					stroke={theme.colors.grey.light}
					strokeWidth='1'
				/>

				<AnimatedLineSeries
					stroke={theme.colors.grey.nft_chart_line}
					dataKey='primary_line'
					data={data}
					xAccessor={accessors.xAccessor}
					yAccessor={accessors.yAccessor}
				/>
				<Tooltip
					snapTooltipToDatumX
					snapTooltipToDatumY
					showSeriesGlyphs
					offsetLeft={-50}
					offsetTop={-65}
					glyphStyle={{
					  fill: theme.colors.primary['100'],
					  strokeWidth: 0.5,
					}}
					renderTooltip={({ tooltipData }) => {
					  return (
					    tooltipData && <div>
								{Object.entries(tooltipData.datumByKey).map((lineDataArray) => {
								  const [key, value] = lineDataArray
								  return (
										<VStack key={key} spacing={1} align='start'>
											<Text color='secondary_text'>
												{format(accessors.xAccessor(value.datum as TData), 'iiii, MMM d HH:mma')}
											</Text>
											<Text size='md'>
												{accessors.yAccessor(value.datum as TData)} ETH
											</Text>
											<Text color='secondary_text'>
												$53,351.51
											</Text>
										</VStack>
								  )
								})}
							</div>
					  )
					}}
				/>
			</XYChart>
		</div>
  )
}

export default LineChart