
import { HomePage } from '../pages/home-page/home-page'
import { ProfilePage } from '../pages/profile-page/profile-page'
import { BlankPage } from '../pages/blank-page/blank-page'
import { CcSuperLayout } from '../layouts/cc-super-layout/cc-super-layout';


import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export function App() {
  const pageLinks = [
    {
      title:"Home",
      path:"/",
      Element: HomePage
    },
    {
      title:"Profile",
      path:"/profile",
      Element: ProfilePage
    },
    {
      title:"Blank",
      path:"/blank",
      Element: BlankPage
    }
  ]
  const themeNames = [
    "neo4j", "nodes", "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
  ]
  return (

    <QueryClientProvider client={queryClient}>
    <CcSuperLayout 
      title="Neo4j Profile PoC"
      items={pageLinks}
      themes={themeNames}
    />
    </QueryClientProvider>
  );
}

export default App;
