import React, { useState, useEffect } from 'react'
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

const drawerWidth = 240

function Copyright () {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
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
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
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
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    padding: theme.spacing(3, 2),
    marginBottom: '0px'
  },
  title: {
    fontSize: 28,
    fontFamily: 'shrikhand'
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
  }
}))

export default function Album () {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  useEffect(() => {

  }, [])

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

        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography variant='h6' className={classes.title}>
                Meus Pedidos
              </Typography>
              <div className={classes.demo}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary='Single-line item'
                    />
                  </ListItem>
                </List>
              </div>
            </Grid>
            <Grid item xs={12} md={12}>

              <div className={classes.demo}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary='Single-line item'
                    />
                  </ListItem>
                </List>
              </div>
            </Grid>

          </Grid>
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
            <ListItemText primary='Início ' />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ChromeReaderModeIcon /></ListItemIcon>
            <ListItemText primary='Minhas solicitações' />
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
