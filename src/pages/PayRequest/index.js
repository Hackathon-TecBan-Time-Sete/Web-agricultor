import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import clsx from 'clsx'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import CssBaseline from '@material-ui/core/CssBaseline'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import PeopleIcon from '@material-ui/icons/People'
import logo from './../../img/logo_preto.png'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const drawerWidth = 240

function Copyright () {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href=''>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px'
  },

  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: 'auto',
    bottom: '0px',
    width: '100%',
    padding: theme.spacing(3, 2),
    marginBottom: '0px'
  },
  title: {
    fontSize: 28,
    alignText: 'center',
    padding: '20px'
  },
  toolbar: {
    backgroundColor: '#1BB954',
    justifyContent: 'space-between'
  },
  left: {
    flex: 1
  },
  menu: {
    flex: 1
  },
  leftLinkActive: {
    color: theme.palette.common.white
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  rightLink: {
    fontSize: 20,
    color: theme.palette.common.white,

    marginLeft: theme.spacing(3)
  },
  linkSecondary: {
    color: theme.palette.secondary.main
  },
  backgroundColor: {
    backgroundColor: '#17C0EB',
    padding: '6px'
  },
  buttonLogin: {
    marginTop: '6px'

  },
  fontShrikhand: {
    fontFamily: 'Shrikhand'
  },
  fontNunito: {
    fontFamily: 'Nunito'
  },
  delete: {
    color: '#7EBEC0'
  },
  buttonCard: {
    textAlign: 'left'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  logo: {
    marginTop: '5px'
  },
  list: {
    padding: '10px'
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: '#1BB954'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    backgroundColor: '#1BB954',
    margin: theme.spacing(3, 0, 2),
    color: '#fff',
    fontFamily: 'Nunito',
    fontSize: '18px',
    '&:hover': {
      backgroundColor: '#1f9b4a'

    }
  },
  notRegistered: {
    textAlign: 'center',
    fontFamily: 'Nunito'
  },
  link: {
    color: 'black',
    textDecoration: 'none'
  }
}))

export default function Album () {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [nomeProduto, setNomeProduto] = useState('')
  const [dataPlantacao, setDataPlantacao] = useState('')
  const [dataColheita, setDataColheita] = useState('')
  const [endereco, setEndereco] = useState('')
  console.log(dataColheita, dataPlantacao)
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  const history = useHistory()
  async function handleCreateProductAccount (event) {
    event.preventDefault()

    const data = {
      email,
      nome,
      nomeProduto,
      dataPlantacao: '2020-07-26',
      dataColheita: '2020-07-26',
      endereco
    }

    console.log(data)
    try {
      await axios({
        method: 'POST',
        url: 'https://api-agroban.herokuapp.com/cadastro',
        data
      })

      alert('Produto cadastrado com sucesso.')
      history.push('/pedidos')
    } catch (error) {
      console.log(error)
      console.log(data)
    }
  }

  return (
    <>
      <CssBaseline />
      <div>
        <AppBar position='fixed' className={classes.main} maxWidth='sm'>
          <Toolbar className={classes.toolbar}>

            <div className={classes.menu}>

              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='end'
                onClick={handleDrawerOpen}
                className={clsx(open)}
              >
                <MenuIcon />
                <img src={logo} alt='Logo' />
              </IconButton>

            </div>

          </Toolbar>
        </AppBar>
        <div className={classes.placeholder} />
      </div>
      <main>

        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar} />
            <Typography component='h1' variant='h5' className={classes.fontNunito}>
          Formulário de requisição
            </Typography>
            <form className={classes.form} onSubmit={handleCreateProductAccount}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    label='Email'
                    name='email'
                    autoComplete='email'
                    autoFocus
                    onChange={event => setEmail(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    name='name'
                    label='Nome'
                    type='text'
                    id='name'
                    onChange={event => setNome(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    name='nameProduct'
                    label='Nome do produto de plantio'
                    type='text'
                    id='nameProduct'
                    onChange={event => setNomeProduto(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id='date'
                    label='data de plantação'
                    type='date'
                    defaultValue='2020-07-26'
                    variant='outlined'
                    margin='normal'
                    InputLabelProps={{
                      shrink: true
                    }}
                    fullWidth
                    onChange={event => setDataPlantacao('2020-07-26')}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id='date'
                    label='Data de colheita'
                    type='date'
                    defaultValue='2020-07-26'
                    variant='outlined'
                    margin='normal'
                    InputLabelProps={{
                      shrink: true
                    }}
                    fullWidth
                    onChange={event => setDataColheita(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    name='address'
                    label='Endereço'
                    type='text'
                    id='address'
                    onChange={event => setEndereco(event.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                className={classes.submit}

              >
            Enviar
              </Button>

            </form>
          </div>

        </Container>
      </main>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ArrowBackIcon />
          </IconButton>
        </div>
        <Divider />
        <List>

          <ListItem button>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <Link href='/home' className={classes.link}>Início</Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon><ChromeReaderModeIcon /></ListItemIcon>
            <Link href='/pedidos' className={classes.link}>Minhas solicitações</Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary='perfil' />
          </ListItem>

        </List>

      </Drawer>
      <footer className={classes.footer}>

        <Copyright />
      </footer>
      {/* End footer */}
    </>
  )
}
