import React, { useState } from 'react';
import { Button, Card, CardContent, Link, TextField } from '@mui/material';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ログイン処理をここに追加
  };

  return (
    <div className="login-container">
      <h2>ログイン</h2>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="form-contents">
              <TextField
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                variant="outlined"
                required
                fullWidth
                margin="normal"
              />
              <TextField
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                variant="outlined"
                required
                fullWidth
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="warning"
                fullWidth
                id="login-button"
              >
                ログイン
              </Button>
            </div>
            <div className="login-link">
              <Link href="#" underline="hover">
                パスワードを忘れてしまいましたか？
              </Link>
              <Link href="/signup" underline="hover">
                サインアップ
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
