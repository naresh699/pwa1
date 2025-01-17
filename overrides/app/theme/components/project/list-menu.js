/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        container: {
            minWidth: 'xs',
            width: 'full',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingLeft: 0,
            display: {base: 'none', lg: 'flex'}
        },
        stackContainer: {
            whiteSpace: 'nowrap',
            flexWrap: 'wrap'
        },
        popoverContent: {
            marginLeft: 'auto',
            marginRight: 'auto',
            border: 0,
            boxShadow: 'xl',
            paddingTop: 3,
            paddingRight: 4,
            paddingBottom: 4,
            paddingLeft: 4,
            minWidth: '100%',
            borderRadius: 0,
            position: 'absolute'
        },
        popoverContainer: {
            paddingTop: 0,
            paddingBottom: 8,
            maxWidth: 'container.xxxl'
        },
        listMenuTriggerContainer: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 0
        },
        listMenuTriggerLink: {
            display: 'block',
            whiteSpace: 'nowrap',
            position: 'relative',
            paddingTop: 3,
            paddingRight: 1,
            paddingBottom: 2,
            fontSize: 'md',
            fontWeight: 700,
            color: 'gray.900',
            _hover: {
                textDecoration: 'none'
            }
        },
        listMenuTriggerLinkActive: {
            textDecoration: 'none',
            _before: {
                position: 'absolute',
                backgroundColor: 'black',
                content: 'attr(name)',
                height: '2px',
                color: 'transparent',
                bottom: '0px'
            }
        },
        listMenuTriggerLinkIcon: {
            marginTop: 3,
            marginRight: 7,
            marginBottom: 2,
            marginLeft: 0,
            _hover: {
                textDecoration: 'none'
            }
        }
    },
    parts: [
        'container',
        'stackContainer',
        'popoverContent',
        'popoverContainer',
        'listMenuTriggerContainer',
        'listMenuTriggerLink',
        'listMenuTriggerLinkActive',
        'listMenuTriggerIcon'
    ]
}
