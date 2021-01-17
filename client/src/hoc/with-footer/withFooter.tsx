import React from 'react';
import Footer from '../../common/footer';

import './style.scss';

const withFooter = (TheComponent: React.FC<any>) => (props: any) => {
  return (
    <div className="page_and_footer">
      <TheComponent {...props} />
      <Footer />
    </div>
  )
}

export default withFooter
