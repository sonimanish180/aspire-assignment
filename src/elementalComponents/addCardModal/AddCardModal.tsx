import { useId, useState } from "react";
import CustomButton from "../customButton/CustomButton";

interface AddCardModalProps {
    title: string,
    onSubmit: (cardName: string, id: string) => void,
    closeModal: () => void,
}

const AddCardModal = ({ title, onSubmit, closeModal }: AddCardModalProps) => {
    const [cardName, setCardName] = useState<string>('');
    const [error, setError] = useState('');
    const cardId = useId();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardName(e.target.value as string);
        setError('');
    };

    const handleSubmit = () => {
        if (!cardName.trim()) {
            setError('Please enter a card name');
            return;
        }
        onSubmit(cardName, cardId);
        setCardName('');
    };

    return (
        <div className="add-card-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2 className="modal-header">{title}</h2>
                <div className="form-container">
                    <div className="form-group">
                        <label>Card Name:</label>
                        <input
                            type="text"
                            id="cardName"
                            value={cardName}
                            onChange={handleChange}
                        />
                    </div>
                    {error && <div className="error">{error}</div>}

                    <div className="button-container">
                        <CustomButton
                            handleClick={handleSubmit}
                            type='primary'
                            buttonText="Submit"
                            customStyle={{
                                padding: '1rem 3.2rem'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default AddCardModal;