import React from 'react';
import { Box, Container, Grid, Paper, Typography, Avatar, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';

const ReviewCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  color: 'black',
  borderRadius: theme.spacing(2),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const reviews = [
  {
    id: 1,
    name: 'João Silva',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    date: '10/03/2024',
    text: 'Excelente experiência! O serviço superou minhas expectativas. Recomendo fortemente para todos.',
  },
  {
    id: 2,
    name: 'Maria Santos',
    avatar: 'https://i.pravatar.cc/150?img=2',
    rating: 4,
    date: '09/03/2024',
    text: 'Muito bom! Atendimento rápido e profissional. Certamente voltarei a utilizar.',
  },
  {
    id: 3,
    name: 'Pedro Oliveira',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
    date: '08/03/2024',
    text: 'Ótima plataforma! Fácil de usar e muito útil. O suporte ao cliente é excepcional.',
  },
  {
    id: 4,
    name: 'Ana Costa',
    avatar: 'https://i.pravatar.cc/150?img=4',
    rating: 4,
    date: '07/03/2024',
    text: 'Serviço confiável e prático. A economia compartilhada no seu melhor!',
  },
  {
    id: 5,
    name: 'Lucas Mendes',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    date: '06/03/2024',
    text: 'Interface intuitiva e produtos de qualidade. O processo de compra é muito simples.',
  },
  {
    id: 6,
    name: 'Isabela Rocha',
    avatar: 'https://i.pravatar.cc/150?img=6',
    rating: 4,
    date: '05/03/2024',
    text: 'Ótimas ofertas e variedade de produtos. Entrega dentro do prazo prometido.',
  },
  {
    id: 7,
    name: 'Rafael Santos',
    avatar: 'https://i.pravatar.cc/150?img=7',
    rating: 5,
    date: '04/03/2024',
    text: 'Excelente atendimento ao cliente. Resolveram minha dúvida rapidamente.',
  },
  {
    id: 8,
    name: 'Camila Lima',
    avatar: 'https://i.pravatar.cc/150?img=8',
    rating: 3,
    date: '03/03/2024',
    text: 'Produtos bons, mas a entrega demorou um pouco mais que o esperado.',
  },
  {
    id: 9,
    name: 'Bruno Almeida',
    avatar: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    date: '02/03/2024',
    text: 'Preços competitivos e sistema de pagamento seguro. Recomendo!',
  },
  {
    id: 10,
    name: 'Mariana Costa',
    avatar: 'https://i.pravatar.cc/150?img=10',
    rating: 4,
    date: '01/03/2024',
    text: 'Boa experiência de compra. O rastreamento do pedido funcionou perfeitamente.',
  },
  {
    id: 11,
    name: 'Felipe Souza',
    avatar: 'https://i.pravatar.cc/150?img=11',
    rating: 5,
    date: '29/02/2024',
    text: 'Produtos chegaram bem embalados e em perfeito estado. Muito satisfeito!',
  },
  {
    id: 12,
    name: 'Laura Oliveira',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 4,
    date: '28/02/2024',
    text: 'Site fácil de navegar e bom suporte pós-venda. Recomendarei para amigos.',
  },
  {
    id: 13,
    name: 'Gustavo Pereira',
    avatar: 'https://i.pravatar.cc/150?img=13',
    rating: 3,
    date: '27/02/2024',
    text: 'Produto de qualidade, mas o processo de troca poderia ser mais simples.',
  },
  {
    id: 14,
    name: 'Carolina Silva',
    avatar: 'https://i.pravatar.cc/150?img=14',
    rating: 5,
    date: '26/02/2024',
    text: 'Melhor experiência de compra online que já tive. Superou expectativas!',
  },
  {
    id: 15,
    name: 'Ricardo Santos',
    avatar: 'https://i.pravatar.cc/150?img=15',
    rating: 4,
    date: '25/02/2024',
    text: 'Bom custo-benefício e entrega rápida. Voltarei a comprar.',
  },
  {
    id: 16,
    name: 'Amanda Ferreira',
    avatar: 'https://i.pravatar.cc/150?img=16',
    rating: 5,
    date: '24/02/2024',
    text: 'Excelente variedade de produtos e preços justos. Muito satisfeita!',
  },
  {
    id: 17,
    name: 'Thiago Costa',
    avatar: 'https://i.pravatar.cc/150?img=17',
    rating: 4,
    date: '23/02/2024',
    text: 'Plataforma confiável e segura. Tive uma ótima experiência de compra.',
  },
  {
    id: 18,
    name: 'Beatriz Lima',
    avatar: 'https://i.pravatar.cc/150?img=18',
    rating: 5,
    date: '22/02/2024',
    text: 'Atendimento excepcional e produtos de qualidade. Recomendo fortemente!',
  },
  {
    id: 19,
    name: 'Daniel Martins',
    avatar: 'https://i.pravatar.cc/150?img=19',
    rating: 4,
    date: '21/02/2024',
    text: 'Interface moderna e processo de compra simplificado. Muito bom!',
  }
];

const Avaliacoes = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#F7FAFC' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 6, color: '#2D3748', fontWeight: 'bold' }}
        >
          Avaliações dos Usuários
        </Typography>
        <Grid container spacing={4}>
          {reviews.map((review) => (
            <Grid item xs={12} sm={6} md={6} key={review.id}>
              <ReviewCard elevation={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    src={review.avatar}
                    sx={{ width: 56, height: 56, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {review.name}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {review.date}
                    </Typography>
                  </Box>
                </Box>
                <Rating
                  value={review.rating}
                  readOnly
                  sx={{
                    mb: 2,
                    '& .MuiRating-iconFilled': {
                      color: '#FFD700',
                    },
                  }}
                />
                <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                  {review.text}
                </Typography>
              </ReviewCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Avaliacoes;