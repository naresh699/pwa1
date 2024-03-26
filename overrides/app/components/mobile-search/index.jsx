import React from 'react'
import {useIntl} from 'react-intl'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Box
  } from '../shared/ui'

  import Search from '../search'

function MobileSearch({isOpen, onClose}) {
    const intl = useIntl()
  
    return (
      <>
        <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent minHeight= "100vh">
            <DrawerBody>
                <Box>
                    <Search
                        placeholder={intl.formatMessage({
                            id: 'header.field.placeholder.search_for_products',
                            defaultMessage: 'Search'
                        })}
                    />
                </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default MobileSearch;