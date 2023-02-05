import './guidelines.style.css'
import pdf_college from '../../assets/docs/Guidelines-College-SPOC.pdf'
import pdf_school from '../../assets/docs/Guidelines-School-SPOC.pdf'

const info = [
  'Total cash prizes worth INR 2,00,000 + goodies, internship opportunities for SBH Senior & SBH  Junior both.',
  'With certificate of excellence for top 3 teams.',
  'With certificate of distinction for top 10 teams.',
  'With certificate of participation to all teams.'
]

const Guidelines = ()=> {
  return (
    <div className="tw-min-h-screen tw-space-y-4 tw-mb-0 tw-p-6 sm:tw-mx-auto sm:tw-max-w-2xl">
      <div>
        <h1 className="tw-mb-4 tw-text-2xl tw-font-bold">Rewards and Prizes</h1>
        <p>All participants will be provided a With certificate of participation. Top 3 teams will be awarded with prize money, exciting goodies and a With certificate of excellence for SBH Junior and SBH Senior. Also the team of the best solution against each problem statement will also be awarded. SBH Senior</p>
      </div>
      <div>
        <h3 className="tw-mb-4 tw-text-xl tw-font-bold">Read the guidelines</h3>
        <div className="tw-flex tw-items-center tw-space-x-6">
          <a href={pdf_college} target="_blank" className="tw-rounded tw-bg-transparent tw-px-5 tw-py-2 tw-text-sm tw-font-bold tw-text-blue-600 tw-ring-2 hover:tw-bg-blue-600 hover:tw-text-white">For college</a>
          <a href={pdf_school} target="_blank" className="tw-rounded tw-bg-transparent tw-px-5 tw-py-2 tw-text-sm tw-font-bold tw-text-blue-600 tw-ring-2 hover:tw-bg-blue-600 hover:tw-text-white">For school</a>
        </div>
      </div>
      <h3 className="tw-pt-4 tw-text-xl tw-font-bold tw-border-b-2">SBH Senior</h3>
      <div className="tw-flex tw-items-center tw-rounded tw-border tw-bg-yellow-200 tw-p-4">
        <div className="tw-mr-6 tw-aspect-square tw-w-16">
          <img src="https://png.pngtree.com/png-vector/20191029/ourmid/pngtree-first-prize-gold-trophy-icon-prize-gold-trophy-winner-first-prize-png-image_1908592.jpg" alt="prize image" />
        </div>
        <div>
          <p className="tw-text-lg tw-font-bold">Winner</p>
          <p>&#8377; 50,000</p>
          <p className="tw-text-sm tw-font-medium tw-text-yellow-600">With certificate</p>
        </div>
      </div>
      <div className="tw-flex tw-items-center tw-rounded tw-border tw-bg-cyan-200 tw-p-4">
        <div className="tw-mr-6 tw-aspect-square tw-w-16">
          <img src="https://png.pngtree.com/png-vector/20191029/ourmid/pngtree-first-prize-gold-trophy-icon-prize-gold-trophy-winner-first-prize-png-image_1908592.jpg" alt="prize image" />
        </div>
        <div>
          <p className="tw-text-lg tw-font-bold">First runner up</p>
          <p>&#8377; 30,000</p>
          <p className="tw-text-sm tw-font-medium tw-text-cyan-600">With certificate</p>
        </div>
      </div>
      <div className="tw-flex tw-items-center tw-rounded tw-border tw-bg-green-200 tw-p-4">
        <div className="tw-mr-6 tw-aspect-square tw-w-16">
          <img src="https://png.pngtree.com/png-vector/20191029/ourmid/pngtree-first-prize-gold-trophy-icon-prize-gold-trophy-winner-first-prize-png-image_1908592.jpg" alt="prize image" />
        </div>
        <div>
          <p className="tw-text-lg tw-font-bold">Second runner up</p>
          <p>&#8377; 20,000</p>
          <p className="tw-text-sm tw-font-medium tw-text-green-600">With certificate</p>
        </div>
      </div>
      <div className="tw-flex tw-items-center tw-rounded tw-border tw-bg-gray-200 tw-p-4">
        <div className="tw-mr-6 tw-aspect-square tw-w-16">
          <img src="https://png.pngtree.com/png-vector/20191029/ourmid/pngtree-first-prize-gold-trophy-icon-prize-gold-trophy-winner-first-prize-png-image_1908592.jpg" alt="prize image" />
        </div>
        <div>
          <p className="tw-text-lg tw-font-bold">Participation With certificate</p>
          <p className="tw-text-sm tw-font-medium tw-text-gray-600">With certificate</p>
        </div>
      </div>
      <h3 className="tw-pt-4 tw-text-xl tw-font-bold tw-border-b-2">SBH Junior</h3>
      <div className="tw-flex tw-items-center tw-rounded tw-border tw-bg-yellow-200 tw-p-4">
        <div className="tw-mr-6 tw-aspect-square tw-w-16">
          <img src="https://png.pngtree.com/png-vector/20191029/ourmid/pngtree-first-prize-gold-trophy-icon-prize-gold-trophy-winner-first-prize-png-image_1908592.jpg" alt="prize image" />
        </div>
        <div>
          <p className="tw-text-lg tw-font-bold">Winner</p>
          <p>&#8377; 25,000</p>
          <p className="tw-text-sm tw-font-medium tw-text-yellow-600">With certificate</p>
        </div>
      </div>
      <div className="tw-flex tw-items-center tw-rounded tw-border tw-bg-cyan-200 tw-p-4">
        <div className="tw-mr-6 tw-aspect-square tw-w-16">
          <img src="https://png.pngtree.com/png-vector/20191029/ourmid/pngtree-first-prize-gold-trophy-icon-prize-gold-trophy-winner-first-prize-png-image_1908592.jpg" alt="prize image" />
        </div>
        <div>
          <p className="tw-text-lg tw-font-bold">First runner up</p>
          <p>&#8377; 15,000</p>
          <p className="tw-text-sm tw-font-medium tw-text-cyan-600">With certificate</p>
        </div>
      </div>
      <div className="tw-flex tw-items-center tw-rounded tw-border tw-bg-green-200 tw-p-4">
        <div className="tw-mr-6 tw-aspect-square tw-w-16">
          <img src="https://png.pngtree.com/png-vector/20191029/ourmid/pngtree-first-prize-gold-trophy-icon-prize-gold-trophy-winner-first-prize-png-image_1908592.jpg" alt="prize image" />
        </div>
        <div>
          <p className="tw-text-lg tw-font-bold">Second runner up</p>
          <p>&#8377; 10,000</p>
          <p className="tw-text-sm tw-font-medium tw-text-green-600">With certificate</p>
        </div>
      </div>
      <div className="tw-flex tw-items-center tw-rounded tw-border tw-bg-gray-200 tw-p-4">
        <div className="tw-mr-6 tw-aspect-square tw-w-16">
          <img src="https://png.pngtree.com/png-vector/20191029/ourmid/pngtree-first-prize-gold-trophy-icon-prize-gold-trophy-winner-first-prize-png-image_1908592.jpg" alt="prize image" />
        </div>
        <div>
          <p className="tw-text-lg tw-font-bold">Participation</p>
          <p className="tw-text-sm tw-font-medium tw-text-gray-600">With certificate</p>
        </div>
      </div>
      <div className="tw-pt-4 tw-text-xl tw-font-bold">Additional info</div>
      <div>
        {
          info.map((data, index) => (<p className="tw-font-medium">{++index}. {data}</p>))
        }
      </div>
    </div>
  );
}

export default Guidelines;