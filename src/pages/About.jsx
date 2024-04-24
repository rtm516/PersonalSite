import SocialButton from '../components/SocialButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMastodon, faTwitter } from '@fortawesome/free-brands-svg-icons'

function About () {
  return (
    <>
      <div className='px-8 pb-12'>
        <div className='bg-white p-6 rounded'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt quam eget ipsum eleifend dictum. Proin in blandit nunc. Vestibulum elementum feugiat posuere. Aenean velit mi, pharetra non mollis in, pretium vel ligula. Cras egestas, felis vitae rhoncus facilisis, sem dolor dictum est, vitae imperdiet lectus felis non nisl. Donec aliquet nisl non massa congue gravida. Etiam viverra eros mi, eget dapibus leo vulputate at. Suspendisse dictum quam eget neque iaculis dapibus vitae eget libero. Duis feugiat, velit sed egestas luctus, risus nisi tempor nibh, eget sollicitudin dolor metus eget nisi. Aliquam nec quam blandit, luctus arcu gravida, pharetra massa. Mauris in justo mattis, ullamcorper risus a, molestie velit. Etiam fermentum dolor lacus, vel tincidunt leo venenatis id. Morbi ut turpis eleifend risus tincidunt vehicula. Mauris interdum pellentesque congue.
          </p>
          <br />
          <p>
            Proin augue sapien, lobortis sit amet luctus nec, porta ornare nunc. Nunc malesuada libero vitae massa congue blandit. Aliquam interdum tincidunt sem, sed faucibus metus venenatis eget. Vivamus dolor massa, cursus a eleifend eu, dictum dapibus risus. Phasellus sed ipsum nec velit dignissim luctus ut in dolor. In felis orci, blandit in purus vitae, mollis suscipit tellus. Nunc imperdiet suscipit quam sed cursus. Vivamus venenatis quam sed consectetur facilisis. Phasellus ut leo at massa suscipit dapibus. Ut non ligula nec nulla gravida mattis eu nec risus. Suspendisse egestas rhoncus nulla, ac ultricies orci efficitur ac. Aenean nec vulputate dui. Sed sed nibh et ipsum placerat tempor eget sed elit.
          </p>
          <br />
          <p>
            Proin et diam faucibus ipsum pharetra semper. Mauris suscipit at purus a tempor. Phasellus rhoncus feugiat mi eu tempor. Duis pulvinar, ligula a sagittis faucibus, nulla massa imperdiet est, eu posuere felis metus ut mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin nulla vel convallis malesuada. Nulla in porta augue. Quisque eleifend tempor elit, eu efficitur sem cursus sit amet. Integer scelerisque, dolor ac gravida euismod, metus dui lobortis est, pulvinar auctor dui arcu vel mauris. Morbi nunc leo, tempus nec metus posuere, sollicitudin molestie velit. Donec molestie euismod iaculis. Vivamus vel massa ac sapien mollis tincidunt. Nullam at dignissim diam.
          </p>
          <br />
          <p>
            In hac habitasse platea dictumst. Duis lorem justo, luctus non bibendum eu, aliquam scelerisque libero. Nam congue, nulla vel mattis pellentesque, dolor tellus viverra lectus, vitae vehicula mauris purus quis nisl. Ut mattis est a mi consectetur, id commodo enim fringilla. Sed bibendum imperdiet sodales. Integer imperdiet at urna quis auctor. Etiam sagittis sagittis mauris, sit amet convallis purus volutpat vitae. Integer id lectus turpis. Proin molestie molestie erat. Fusce ac massa non magna placerat iaculis vel nec augue. Vestibulum sed purus id mi aliquam vehicula.
          </p>
          <br />
          <p>
            Phasellus eu diam nunc. Duis velit nisi, posuere et libero viverra, vehicula luctus orci. Nam sit amet lectus iaculis sapien tincidunt suscipit non eget arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur lorem tortor, feugiat sed placerat at, blandit in ligula. Morbi eu est vitae mi aliquam imperdiet. Phasellus congue erat ligula, sit amet consectetur justo maximus nec. Vivamus bibendum luctus purus vitae laoreet. Nulla nec hendrerit tortor, id vehicula ipsum. Duis tempus enim nunc, vitae ullamcorper elit dapibus at.
          </p>
          <div className='flex gap-5 justify-center'>
            <SocialButton link='https://www.linkedin.com/in/ryan-m-31246b12b/'><FontAwesomeIcon icon={faLinkedin} /></SocialButton>
            <SocialButton link='https://twitter.com/rtm516'><FontAwesomeIcon icon={faTwitter} /></SocialButton>
            <SocialButton link='https://infosec.exchange/@rtm516'><FontAwesomeIcon icon={faMastodon} /></SocialButton>
            <SocialButton link='https://github.com/rtm516/'><FontAwesomeIcon icon={faGithub} /></SocialButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
