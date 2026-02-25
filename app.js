(function () {
  var ARENA_CHANNEL = 'https://www.are.na/tran-lam/artifacts-52ar7tn1ouk';

  var ARTIFACTS = [
    { id: '13435912', type: 'object', title: 'Traditional Indian kettles with handmade folk art', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMzQzNTkxMi9vcmlnaW5hbF8xNTM2NjYyNjYwZjBiN2IyN2UxMDE4NDVkZjhkN2I4Ny5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0', link: 'https://www.are.na/block/13435912' },
    { id: '8231653',  type: 'object', title: 'Ceramic Doublet, the Armor with the Negative AC', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI4MjMxNjUzL29yaWdpbmFsXzBjYzE5NDkxYzg5OTMzMzljNTY0ZTFjNDhlYTI4NjA3LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0', link: 'https://www.are.na/block/8231653' },
    { id: '7880643',  type: 'object', title: 'Hunting sword with scabbard (Germany, ca. 1740)', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI3ODgwNjQzL29yaWdpbmFsXzRiNTE4OTJlNjFjODBlMDlhZjg3MzlmMzdiOTE4NGQyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0', link: 'https://www.are.na/block/7880643' },
    { id: '13979194', type: 'nature', title: 'Zenopsis-nebulosa transparent specimen', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMzk3OTE5NC9vcmlnaW5hbF82NWFmYzA1MzBiYzU4M2MxNjNlYjMwNDA3NTUwOTU0Zi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0', link: 'https://www.are.na/block/13979194' },
    { id: '12394305', type: 'object', title: 'Honeycomb amphora', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMjM5NDMwNS9vcmlnaW5hbF9jNWJiYjA0MjE4NzVjNjIxY2ExNGVkZDM4OGJlNDc3Ny5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0', link: 'https://www.are.na/block/12394305' },
    { id: '1375412',  type: 'fashion', title: '\u201cBarefoot in the Grass\u201d sandals, Herbert & Beth Levine (c.1960s)', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMzc1NDEyL29yaWdpbmFsX2JjNzk3ZDc4ZGUwNGRlODg0ODJkODJiOGQ1ZmVjZGViIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0NDAsImhlaWdodCI6NDQwLCJmaXQiOiJjb3ZlciIsIndpdGhvdXRFbmxhcmdlbWVudCI6ZmFsc2V9LCJ3ZWJwIjp7InF1YWxpdHkiOjc1fSwianBlZyI6eyJxdWFsaXR5Ijo3NX0sInJvdGF0ZSI6bnVsbH19?bc=1', link: 'https://www.are.na/block/1375412' },
    { id: '9326290',  type: 'design', title: 'INFOBAR by Naoto Fukasawa (2003)', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI5MzI2MjkwL29yaWdpbmFsXzc0ZmM2OWZkMTA3ZTZiMjFhZTkxNDBhNTQxYzRiZmE1LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0', link: 'https://www.are.na/block/9326290' },
    { id: '10104027', type: 'design', title: 'Abitacolo, Bruno Munari', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMDEwNDAyNy9vcmlnaW5hbF8yZjY0OTIwMmRjNzlkZTU0MzU2MjVkYzNkNTkxZmI5YS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0', link: 'https://www.are.na/block/10104027' },
    { id: '12490899', type: 'fashion', title: 'Bj\u00f6rk by M/M Paris', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMjQ5MDg5OS9vcmlnaW5hbF8yMmZkM2UyZTAzNDljYzQ2OTVkOTJiNDM5ZGRjNTkzYS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0', link: 'https://www.are.na/block/12490899' },
    { id: '2588824',  type: 'fashion', title: 'Craig Green for Moncler', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIyNTg4ODI0L29yaWdpbmFsXzQ1NThkNTZmMDUzZmZhMDA5NTY4ZmEzMTg1YjY3OWUwLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=1', link: 'https://www.are.na/block/2588824' },
    { id: '5959203',  type: 'design', title: 'Phil Knight\u2019s business card', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI1OTU5MjAzL29yaWdpbmFsXzU4ZmM3YzcwYTE2OGQ0MjA0NWZkYTBlMTQyOWFhOTc5LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0', link: 'https://www.are.na/block/5959203' },
    { id: '2131898',  type: 'space', title: 'New York Review of Books office', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIyMTMxODk4L29yaWdpbmFsXzAzOGM1MjMxN2M3M2M5NmE5YjZmZGQ4MjEyY2Q2YjZhLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=1', link: 'https://www.are.na/block/2131898' },
    { id: '12778438', type: 'design', title: 'Better Air Benches, Wayward', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMjc3ODQzOC9vcmlnaW5hbF85YjAyZTllN2QwMGEwYTkwMGEyYzNlNDYzMmQ5OGNlOC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0', link: 'https://www.are.na/block/12778438' },
    { id: '14497228', type: 'object', title: 'Ports', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxNDQ5NzIyOC9vcmlnaW5hbF82YzUxOGMzMGU1OTk0NTJmN2NmMWMwYzM5NjIzMWE1ZS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0', link: 'https://www.are.na/block/14497228' },
    { id: '10190353', type: 'nature', title: 'Kumpula botanic garden, Helsinki, Finland', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMDE5MDM1My9vcmlnaW5hbF84MjI0NTEzNzg4NzZmMGM3ODBhMzljNDYzZTNjMDA2Mi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0', link: 'https://www.are.na/block/10190353' },
    { id: '1071305',  type: 'fashion', title: 'Cecilia Poupon', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMDcxMzA1L29yaWdpbmFsXzlmMjVlY2Y2YTNhNmM0YjNkMjE2MmIxMGJhYzk2ZDI5LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=1', link: 'https://www.are.na/block/1071305' },
    { id: '1604714',  type: 'design', title: 'The Lawless Chair (designed by Evan Fay)', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxNjA0NzE0L29yaWdpbmFsXzM3MDVjZDgzZGE5NGM5MzhjODA0ODgwMDQzY2M0MTNjIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0NDAsImhlaWdodCI6NDQwLCJmaXQiOiJjb3ZlciIsIndpdGhvdXRFbmxhcmdlbWVudCI6ZmFsc2V9LCJ3ZWJwIjp7InF1YWxpdHkiOjc1fSwianBlZyI6eyJxdWFsaXR5Ijo3NX0sInJvdGF0ZSI6bnVsbH19?bc=1', link: 'https://www.are.na/block/1604714' },
    { id: '5717330',  type: 'object', title: 'Amy Brener Flexi-Shield (Eostra), 2019', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI1NzE3MzMwL29yaWdpbmFsXzAzMzNlMGFhMWNlZTY4NTdiMmMwZmZjNzQ2M2Q0YTg4LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0', link: 'https://www.are.na/block/5717330' },
    { id: '3287975',  type: 'object', title: 'Bubble Gum', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIzMjg3OTc1L29yaWdpbmFsXzc1MmQwMzhkMzQ4MjM1NmJiNWI2NGEyMzFkYmM3ZGIwLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=1', link: 'https://www.are.na/block/3287975' },
    { id: '6326500',  type: 'object', title: 'French Medieval Song Book', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI2MzI2NTAwL29yaWdpbmFsXzdiMGNmN2ZiMzJhMmVkODA5ZWE1OGQyYzg5YWE5YmQwLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0', link: 'https://www.are.na/block/6326500' },
    { id: '47066',    type: 'design', title: 'Maltron \u2014 Single Handed Keyboard', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI0NzA2Ni9vcmlnaW5hbF8yZmFhYmY1MTlmNWVkZDJkOTMwMjlmMThmM2UyNjJhMC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=1', link: 'https://www.are.na/block/47066' },
    { id: '15517512', type: 'object', title: 'Scrimshawed double comb, sailors love token, British, mid-19th c.', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxNTUxNzUxMi9vcmlnaW5hbF9jMDY5NmUxYzI1NjU4YzEzZDljZmMxZmQ1ZjkyZjRjZi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0', link: 'https://www.are.na/block/15517512' },
    { id: '8348137',  type: 'nature', title: 'Morning. Parrot Toadstool.', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI4MzQ4MTM3L29yaWdpbmFsXzJiNDkzZWE0NDU3MDNjMGY5NzZjMTFlMjQ4NTk5NTY4LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0', link: 'https://www.are.na/block/8348137' },
    { id: '14781482', type: 'object', title: 'German Panther, 2007', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxNDc4MTQ4Mi9vcmlnaW5hbF80ZTgyNjczZjI5MTkyZjUwZDE3N2I3ZTIzZmFmYjBmOS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0', link: 'https://www.are.na/block/14781482' },
    { id: '15287065', type: 'design', title: 'Wilcox Industries RAID-X', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxNTI4NzA2NS9vcmlnaW5hbF9jZmY3Y2ZhODMyNmY1NGIxYmQ3OGRhMzYwNDhkNzVmYi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0', link: 'https://www.are.na/block/15287065' },
    { id: '15373663', type: 'space', title: 'Nordic Food Lab', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxNTM3MzY2My9vcmlnaW5hbF81ZDBmZGJiYjI2Yzc3OWYzOGNjZDMyZTFmNjlmYjEyMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ0MCwiaGVpZ2h0Ijo0NDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50IjpmYWxzZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0=?bc=0', link: 'https://www.are.na/block/15373663' },
    { id: '4976266',  type: 'space', title: 'Point of Sale @ Hessel Museum of Art', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI0OTc2MjY2L29yaWdpbmFsXzkyYmUzYWM0OGNlODVmMmRiODFhNDhhMGMzNDUxMWJiLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0', link: 'https://www.are.na/block/4976266' },
    { id: '5603332',  type: 'design', title: 'Harry Nuriev', thumb: 'https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI1NjAzMzMyL29yaWdpbmFsX2YyNDkzNTVmNWI4OTE3ZjhjMGY0YTA3MTU0NGNlNWY1LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDQwLCJoZWlnaHQiOjQ0MCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfSwid2VicCI6eyJxdWFsaXR5Ijo3NX0sImpwZWciOnsicXVhbGl0eSI6NzV9LCJyb3RhdGUiOm51bGx9fQ==?bc=0', link: 'https://www.are.na/block/5603332' },
  ];

  var ATLAS = [
    { id: 'wb-001', code: 'WB-001', name: 'WhiteBox 001', format: 'Lab', chapter: '001', desc: 'Material & scientific exploration', location: 'New York City', status: 'Archived' },
    { id: 'bb-001', code: 'BB-001', name: 'BlackBox 001', format: 'Stage', chapter: '001', desc: 'Digital fiction & immersive', location: 'New York City', status: 'Archived' },
    { id: 'wb-002', code: 'WB-002', name: 'WhiteBox 002', format: 'Lab', chapter: '002', desc: 'Material & scientific exploration', location: 'New York City', status: 'Archived' },
    { id: 'bb-002', code: 'BB-002', name: 'BlackBox 002', format: 'Stage', chapter: '002', desc: 'Digital fiction & immersive', location: 'New York City', status: 'Archived' },
    { id: 'wb-003', code: 'WB-003', name: 'WhiteBox 003', format: 'Lab', chapter: '003', desc: 'Material & scientific exploration', location: 'New York City', status: 'Archived' },
    { id: 'bb-003', code: 'BB-003', name: 'BlackBox 003', format: 'Stage', chapter: '003', desc: 'Digital fiction & immersive', location: 'New York City', status: 'Archived' },
    { id: 'wb-004', code: 'WB-004', name: 'WhiteBox 004', format: 'Lab', chapter: '004', desc: 'Material & scientific exploration', location: 'New York City', status: 'Archived' },
    { id: 'bb-004', code: 'BB-004', name: 'BlackBox 004', format: 'Stage', chapter: '004', desc: 'Digital fiction & immersive', location: 'New York City', status: 'Archived' },
    { id: 'wb-005', code: 'WB-005', name: 'WhiteBox 005', format: 'Lab', chapter: '005', desc: 'Material & scientific exploration', location: 'New York City', status: 'Active' },
    { id: 'bb-005', code: 'BB-005', name: 'BlackBox 005', format: 'Stage', chapter: '005', desc: 'Digital fiction & immersive', location: 'New York City', status: 'Active' },
  ];

  var typeLabels = {
    object: 'Object',
    design: 'Design',
    nature: 'Nature',
    space: 'Space',
    fashion: 'Fashion',
  };

  var currentType = 'all';
  var currentQuery = '';
  var viewMode = 'grid';
  var focusedIndex = 0;

  var $list = document.getElementById('artifact-list');
  var $grid = document.getElementById('artifact-grid');
  var $meta = document.getElementById('result-meta');
  var $empty = document.getElementById('empty-state');
  var $search = document.getElementById('search-input');
  var $clear = document.getElementById('search-clear');
  var $viewLabel = document.getElementById('view-label');
  var $overview = document.getElementById('overview-header');
  var $overviewCount = document.getElementById('overview-count');
  var $atlasGrid = document.getElementById('atlas-grid');

  function matchesQuery(artifact) {
    if (!currentQuery.trim()) return true;
    var q = currentQuery.toLowerCase();
    var str = [artifact.title, typeLabels[artifact.type] || artifact.type].join(' ').toLowerCase();
    return str.includes(q);
  }

  function matchesType(artifact) {
    if (currentType === 'all') return true;
    return artifact.type === currentType;
  }

  function getFiltered() {
    return ARTIFACTS.filter(function (a) {
      return matchesQuery(a) && matchesType(a);
    });
  }

  function escapeHtml(s) {
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function renderListItem(artifact) {
    var li = document.createElement('li');
    var href = artifact.link || '#';
    li.innerHTML =
      '<a class="artifact-list-link" href="' + href + '" target="_blank" rel="noopener" data-index="-1">' +
        '<span class="artifact-list-thumb"><img src="' + escapeHtml(artifact.thumb) + '" alt="" loading="lazy"></span>' +
        '<span class="artifact-list-title">' + escapeHtml(artifact.title) + '</span>' +
        '<span class="artifact-list-type">' + escapeHtml(typeLabels[artifact.type] || artifact.type) + '</span>' +
      '</a>';
    return li;
  }

  function renderCard(artifact) {
    var li = document.createElement('li');
    var typeLabel = typeLabels[artifact.type] || artifact.type;
    var href = artifact.link || '#';
    li.innerHTML =
      '<div class="artifact-card" data-id="' + artifact.id + '">' +
        '<a class="artifact-thumb-link" href="' + href + '" target="_blank" rel="noopener" data-index="-1" title="' + escapeHtml(artifact.title) + '">' +
          '<div class="artifact-thumb">' +
            '<img class="artifact-thumb-img" src="' + escapeHtml(artifact.thumb) + '" alt="' + escapeHtml(artifact.title) + '" loading="lazy">' +
            '<div class="artifact-actions">' +
              '<span class="btn btn-view">View</span>' +
              '<button type="button" class="btn btn-copy" title="Copy link">Copy link</button>' +
            '</div>' +
          '</div>' +
        '</a>' +
        '<div class="artifact-body">' +
          '<div class="artifact-title-text">' + escapeHtml(artifact.title) + '</div>' +
          '<div class="artifact-meta">' + escapeHtml(typeLabel) + '</div>' +
        '</div>' +
      '</div>';
    var card = li.firstElementChild;
    var copyBtn = card.querySelector('.btn-copy');
    if (copyBtn) {
      copyBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var url = artifact.link || (window.location.origin + window.location.pathname + '?id=' + artifact.id);
        navigator.clipboard.writeText(url).then(function () {
          copyBtn.textContent = 'Copied';
          setTimeout(function () { copyBtn.textContent = 'Copy link'; }, 1500);
        });
      });
    }
    return li;
  }

  function renderAtlas() {
    if (!$atlasGrid) return;
    $atlasGrid.innerHTML = '';
    ATLAS.forEach(function (space) {
      var div = document.createElement('div');
      var statusClass = space.status === 'Active' ? 'atlas-status--active' : 'atlas-status--archived';
      div.className = 'atlas-card';
      div.innerHTML =
        '<div class="atlas-card-header">' +
          '<span class="atlas-code">' + escapeHtml(space.code) + '</span>' +
          '<span class="atlas-status ' + statusClass + '">' + escapeHtml(space.status) + '</span>' +
        '</div>' +
        '<div class="atlas-name">' + escapeHtml(space.name) + '</div>' +
        '<div class="atlas-format">' + escapeHtml(space.format) + ' \u00b7 Chapter ' + escapeHtml(space.chapter) + '</div>' +
        '<div class="atlas-desc">' + escapeHtml(space.desc) + '</div>' +
        '<div class="atlas-location">' + escapeHtml(space.location) + '</div>';
      $atlasGrid.appendChild(div);
    });
  }

  function getFocusableLinks() {
    if (viewMode === 'list') {
      return Array.from(document.querySelectorAll('.artifact-list-link'));
    }
    return Array.from(document.querySelectorAll('.artifact-thumb-link'));
  }

  function setFocusIndex(index) {
    var links = getFocusableLinks();
    if (links.length === 0) return;
    focusedIndex = Math.max(0, Math.min(index, links.length - 1));
    links[focusedIndex].focus();
  }

  function updateFocusableIndices() {
    var links = getFocusableLinks();
    links.forEach(function (link, i) {
      link.setAttribute('data-index', i);
    });
  }

  function render() {
    var list = getFiltered();
    $list.innerHTML = '';
    $grid.innerHTML = '';
    list.forEach(function (artifact) {
      $list.appendChild(renderListItem(artifact));
      $grid.appendChild(renderCard(artifact));
    });
    $meta.textContent = list.length + ' artifact' + (list.length !== 1 ? 's' : '');
    if ($overviewCount) $overviewCount.textContent = list.length;
    $empty.hidden = list.length > 0;
    updateFocusableIndices();
    focusedIndex = 0;
    if (list.length > 0) setFocusIndex(0);
  }

  function setView(mode) {
    viewMode = mode;
    var listBtn = document.getElementById('view-list');
    var gridBtn = document.getElementById('view-grid');
    listBtn.setAttribute('aria-pressed', mode === 'list');
    gridBtn.setAttribute('aria-pressed', mode === 'grid');
    listBtn.classList.toggle('chip--active', mode === 'list');
    gridBtn.classList.toggle('chip--active', mode === 'grid');
    $list.classList.toggle('artifact-list--hidden', mode !== 'list');
    $grid.classList.toggle('artifact-grid--hidden', mode !== 'grid');
    if ($overview) $overview.classList.toggle('overview-header--hidden', mode !== 'grid');
    updateFocusableIndices();
    setFocusIndex(Math.min(focusedIndex, getFocusableLinks().length - 1));
  }

  document.addEventListener('keydown', function (e) {
    var links = getFocusableLinks();
    if (links.length === 0) return;
    if (document.activeElement === $search) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      setFocusIndex(focusedIndex + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      setFocusIndex(focusedIndex - 1);
    }
  });

  $search.addEventListener('input', function () {
    currentQuery = $search.value;
    $clear.hidden = !currentQuery.length;
    render();
  });

  $search.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      $search.value = '';
      currentQuery = '';
      $clear.hidden = true;
      $search.blur();
      render();
    }
  });

  $clear.addEventListener('click', function () {
    $search.value = '';
    currentQuery = '';
    $clear.hidden = true;
    $search.focus();
    render();
  });

  document.getElementById('filter-type').addEventListener('click', function (e) {
    var chip = e.target.closest('.chip--filter');
    if (!chip || chip.id) return;
    var type = chip.getAttribute('data-type');
    if (!type) return;
    currentType = type;
    document.querySelectorAll('#filter-type .chip--filter').forEach(function (c) {
      c.classList.toggle('chip--active', c.getAttribute('data-type') === type);
    });
    render();
  });

  document.getElementById('view-list').addEventListener('click', function () { setView('list'); });
  document.getElementById('view-grid').addEventListener('click', function () { setView('grid'); });

  document.addEventListener('focusin', function (e) {
    var link = e.target.closest('.artifact-list-link, .artifact-thumb-link');
    if (link && link.hasAttribute('data-index')) {
      focusedIndex = parseInt(link.getAttribute('data-index'), 10);
    }
  });

  render();
  renderAtlas();
  setView('grid');
})();
