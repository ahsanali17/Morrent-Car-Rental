import { useDropDownContext } from '../../contexts/DropDownContext';
import { DropDownWrapper, DropDownList, Item } from './styles';

type DropDownProps = {
  dropDownItems: string[];
};

const DropDown = ({ dropDownItems }: DropDownProps) => {
  const { openMenu } = useDropDownContext();

  return (
    <DropDownWrapper open={openMenu}>
      <DropDownList>
        {dropDownItems.map((item, idx) => (
          <Item key={idx}>
            <p>{item}</p>
          </Item>
        ))}
      </DropDownList>
    </DropDownWrapper>
  )
}

export default DropDown