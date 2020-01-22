// @ts-nocheck
import React, { FunctionComponent } from 'react';
import { compose } from 'recompose';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

type TProps = {$2};
type TInnerProps = {$3};

const $TM_FILENAME_BASE: FunctionComponent<TInnerProps> = ($4) => {
  return (
    <div>$1</div>
  );
};

const mapStateToProps = createStructuredSelector({
  $5
});

const mapDispatchToProps = {
  $6
};

const enhance = compose<TInnerProps, TProps>(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  $7
);

export default enhance($TM_FILENAME_BASE);