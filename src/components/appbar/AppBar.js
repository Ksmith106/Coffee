 import React from 'react'

 import{IoEggOutline, IoAddSharp, IoAmericanFootballSharp} from 'react-icons/io5'
 import{DiAndroid} from 'react-icons/di'
 

 import {AppBarStyles, AppBarItems, AppBarItem} from './styles'
 import{IconButton} from './../../ui/buttons'
 function AppBar  (props){
     return( 
          <AppBarStyles>
              <AppBarItems>
                  <AppBarItem>branding</AppBarItem>
                  
                  <AppBarItem>
                      <IconButton>
                          <IoEggOutline size="1.25rem" color="hotpink"/>
                      </IconButton>
                      <IconButton>
                          <IoAddSharp size="1.25rem" color="hotpink"/>
                      </IconButton>
                      <IconButton>
                          <IoAmericanFootballSharp size="1.75rem" color="hotpink"/>
                      </IconButton>
                      <iconButton>
                      <DiAndroid size="1.25rem" color="hotpink"/>
                      </iconButton>
                  </AppBarItem>
              </AppBarItems>
          </AppBarStyles>
     )
 }
 
 export default AppBar 