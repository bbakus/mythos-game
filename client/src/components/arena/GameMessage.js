import React from 'react';

function GameMessage({ message, showIntroModal, showTutorialModal, showDeckSelectionModal, showDrawHandModal, showCoinTossModal, showForfeitConfirmModal, showNewRoundModal, showGameOverModal, showGuardBlockModal, showRetainCardModal, showBattleResults }) {
    // Don't show game message if any modal is active
    const isAnyModalActive = showIntroModal || showTutorialModal || showDeckSelectionModal || 
        showDrawHandModal || showCoinTossModal || showForfeitConfirmModal || showNewRoundModal || 
        showGameOverModal || showGuardBlockModal || showRetainCardModal || showBattleResults;

    // Only show message if it's the hand modal and we have a message
    if (!message || !showDrawHandModal) {
        return null;
    }

    return (
        <div className="message-display">
            {message}
        </div>
    );
}

export default GameMessage; 