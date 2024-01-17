import Committe from '../../components/SBH2023/Committe'
import Finale from '../../components/SBH2023/Finale'
import Gallery from '../../components/SBH2023/Gallery'
import Sponsors from '../Home/Sponsors'
import Impact from '../../components/SBH2023/Impact'
import Supporters from '../../components/SBH2023/Supporters'
import Winners from '../../components/SBH2023/Winners'
import Themes from '../Home/component.body.themes'

const SBH2023 = () => {
  return (
    <div>
      <Impact />
      <Finale />
      <Finale />
      <Winners />
      <Committe />
        <Gallery />
        <Themes/>
        <Sponsors/> 
    </div>
  )
}

export default SBH2023