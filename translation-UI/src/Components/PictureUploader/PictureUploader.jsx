import { useState } from 'react';
import hljs from 'highlight.js';

import { Container, Text } from '@mantine/core';
import styles from './PictureUploader.module.css';

const text =
  "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.\"Whenever you feel like criticizing any one,\" he told me, \"just remember that all the people in this world haven't had the advantages that you've had.\"He didn't say any more but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence I'm inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores. The abnormal mind is quick to detect and attach itself to this quality when it appears in a normal person, and so it came about that in college I was unjustly accused of being a politician, because I was privy to the secret griefs of wild, unknown men. Most of the confidences were unsought—frequently I have feigned sleep, preoccupation, or a hostile levity when I realized by some unmistakable sign that an intimate revelation was quivering on the horizon—for the intimate revelations of young men or at least the terms in which they express them are usually plagiaristic and marred by obvious suppressions. Reserving judgments is a matter of infinite hope. I am still a little afraid of missing something if I forget that, as my father snobbishly suggested, and I snobbishly repeat, a sense of the fundamental decencies is parcelled out unequally at birth.";

function PictureUploader({ selectedText, handleTextSelect }) {
  const renderHighlightedText = () => {
    if (!selectedText) return text;

    const parts = text.split(selectedText);
    return parts.map((part, idx) => {
      return (
        <span key={idx}>
          {idx > 0 && <span style={{ backgroundColor: 'yellow' }}>{selectedText}</span>}
          {part}
        </span>
      );
    });
  };

  return (
    <Container className={styles.container} onMouseUp={handleTextSelect}>
      <Text fz="md">{renderHighlightedText()}</Text>
    </Container>
  );
}

export default PictureUploader;
