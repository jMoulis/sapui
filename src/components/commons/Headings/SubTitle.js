import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const SubTitle = styled.h2`
  font-size: 2rem;
  margin: 0.5rem;
`;

SubTitle.propTypes = {
  value: PropTypes.string,
};

export default SubTitle;
