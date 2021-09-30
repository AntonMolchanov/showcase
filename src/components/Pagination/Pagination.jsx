import "./Pagination.scss"

import Pagination from '@mui/material/Pagination';

export default function PaginationRounded() {

  return (
    <Pagination count={12} siblingCount={0} variant="outlined" shape="rounded" />
  );
}