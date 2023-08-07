import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Time({
  created,
  lastCallDeadline,
  T,
}: {
  created: string;
  lastCallDeadline?: string;
  T: Function;
}) {
  return (
    <Box pb={[2, 2, 3, 3]}>
      <Typography fontWeight="bold" fontSize={14} component="span">
        {T({ en: 'Created', zh: '创建时间' })}:{' '}
      </Typography>
      <Typography component="span" fontSize={14} fontWeight="normal">
        {created}
      </Typography>
      {lastCallDeadline && (
        <>
          <Typography fontWeight="bold" fontSize={14} component="span" ml={1}>
            Last Call Deadline:{' '}
          </Typography>
          <Typography component="span" fontSize={14} fontWeight="normal">
            {lastCallDeadline}
          </Typography>
        </>
      )}
    </Box>
  );
}
