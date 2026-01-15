'use client';

import { useState } from 'react';
import { Container, AppBar, Toolbar, IconButton, Tooltip, Box, Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default function Home() {
  // 1-100の数字の状態を管理（true = 有効/青、false = 無効/灰色）
  const [numbers, setNumbers] = useState<boolean[]>([...Array(100)].map((_, i) => i !== 0 && i !== 99));

  // ボタンクリック時の処理
  const handleNumberClick = (index: number) => {
    setNumbers(prev => {
      const newNumbers = [...prev];
      newNumbers[index] = false; // 無効化
      return newNumbers;
    });
  };

  // リセット処理
  const handleReset = () => {
    setNumbers([...Array(100)].map((_, i) => i !== 0 && i !== 99));
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="リセット">
            <IconButton
              color="inherit"
              onClick={handleReset}
            >
              <RestartAltIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 3 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(10, 1fr)',
            gap: 1,
            margin: '0 auto',
          }}
        >
          {numbers.map((isActive, index) => (
            <Button
              key={index}
              onClick={() => handleNumberClick(index)}
              disabled={!isActive}
              sx={{
                width: '100%',
                aspectRatio: '1 / 1',
                position: 'relative',
                borderRadius: '50%',
                minWidth: 0,
                padding: 0,
                backgroundColor: isActive ? '#1976d2' : '#9e9e9e',
                color: '#ffffff',
                '&:hover': {
                  backgroundColor: isActive ? '#1565c0' : '#9e9e9e',
                },
                '&.Mui-disabled': {
                  backgroundColor: '#9e9e9e',
                  color: '#ffffff',
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: { xs: '1rem', sm: '1.5rem' },
                  fontWeight: 'bold',
                }}
              >
                {index + 1}
              </Box>
            </Button>
          ))}
        </Box>
      </Container>
    </>
  );
}
