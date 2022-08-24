import { extendTheme } from '@chakra-ui/react'
export const theme = extendTheme({
    
    components: {
        Button: {
            
             variants: {
        
        base: {
          fontWeight:"normal",
          fontSize: 'md'
         },
        sm: {
          fontWeight:"normal",
          fontSize: 'sm'
         },
                md: {
            
          

          fontWeight:"normal",
          fontSize: 'md'
         },
      }
    },
    Heading: {
          variants: {
        
        base: {
          
          fontSize: 'xl'
         },
        sm: {
          
          fontSize: 'lg'
         },
                md: {
            
          

          
          fontSize: '2xl'
         },
      }
      },
    Text: {
          variants: {
        
        base: {
          
          fontSize: 'md'
         },
        sm: {
          
          fontSize: 'sm'
         },
                md: {
            
          

          
          fontSize: 'lg'
         },
      }
      }
    }
})