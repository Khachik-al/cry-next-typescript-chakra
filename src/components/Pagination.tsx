import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import Pagination from 'rc-pagination'
import { FC } from 'react'
import { exportableLoader } from '../image-loader'
import 'rc-pagination/assets/index.css'

interface Props {
  total: number;
  current: number;
  pageSize: number;
  changePage: (value: number) => Promise<void>;
}

const PaginationComp: FC<Props> = ({ changePage, current, total, pageSize }) => (
  <Pagination
    pageSize={pageSize}
    onChange={changePage}
    current={current}
    total={total}
    className={total > 50 ? 'more_than_50' : ''}
    hideOnSinglePage
    jumpPrevIcon={() => <Image loader={exportableLoader} src='/assets/img/point.svg' alt='.' height={5} width={5} />}
    jumpNextIcon={() => <Image loader={exportableLoader} src='/assets/img/point.svg' alt='.' height={5} width={5} />}
    prevIcon={() => <ChevronLeftIcon />}
    nextIcon={() => <ChevronRightIcon />}
  />
)

export default PaginationComp
