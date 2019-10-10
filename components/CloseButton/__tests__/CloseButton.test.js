import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import CloseButton from '../CloseButton';

describe('CloseButton', () => {
  it('should render with just required props passed', () => {
    createSnapshotTest(<CloseButton onClick={jest.fn()} />);
  });

  it('should not be clickable when disabled', () => {
    const onClickMock = jest.fn();
    const wrapper = render(<CloseButton disabled onClick={onClickMock} />);

    fireEvent.click(wrapper.container.querySelector('button'));
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
});
