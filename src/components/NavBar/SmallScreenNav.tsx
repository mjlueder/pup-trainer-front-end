import { User } from '../../types/models'

interface SmallScreenProps {
  user: User | null;
  handleLogout: () => void;
  width: number;
  isOpen: boolean;
  handleOpen: () => void;
}

const SmallScreenNav = (props: SmallScreenProps): JSX.Element => {
  const { user, handleLogout, width, isOpen, handleOpen } = props

  return (
    <>
    
    </>
  )
}

export default SmallScreenNav