import React from 'react';
import { Box, Button } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export default function OriginalLink({
  eip,
  list,
  discussions,
  T,
}: {
  eip: string;
  list?: { title: string; link: string }[];
  discussions?: string;
  T: Function;
}) {
  return (
    <Box mt={[0, 0, 2, 2]} pb={3}>
      {discussions && (
        <Button
          sx={{ marginRight: '16px', borderRadius: '6px', padding: '0 16px' }}
          variant="contained"
          startIcon={
            <ChatBubbleOutlineIcon
              sx={{ width: 22, height: 22, verticalAlign: 'middle' }}
            />
          }
          size="large"
          href={discussions}
        >
          {T({ en: 'Discussions', zh: '社区讨论' })}
        </Button>
      )}

      <Button
        variant="outlined"
        size="large"
        sx={{
          color: '#272D37',
          borderColor: '#DAE0E6',
          borderRadius: '6px',
          padding: '0 16px',
          '&:hover': {
            color: '#437ef7',
          },
        }}
        href={`https://eips.ethereum.org/EIPS/eip-${eip}`}
      >
        {T({ en: 'Original link', zh: '原文链接' })}
      </Button>

      {!!(list && list.length) &&
        list.map((item) => (
          <Button
            key={item.link}
            variant="outlined"
            size="large"
            sx={{
              marginLeft: '16px',
              color: '#272D37',
              borderColor: '#DAE0E6',
              borderRadius: '6px',
              padding: '0 16px',
              '&:hover': {
                color: '#437ef7',
              },
            }}
            href={item.link}
          >
            {item.title}
          </Button>
        ))}
    </Box>
  );
}
