import { startOfMessageType } from './utils';
import { START_OF_PACKET, START_OF_MESSAGE} from './constants';

describe('Day6', () => {

    describe('Part1', () => {
            test('start-of-packet with testinput no1 should return processed at position 7', () => {
                const mockSequence = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb';

                const startOfPacketValue = startOfMessageType(START_OF_PACKET, mockSequence);

                expect(startOfPacketValue).toBe(7);

            });

            test('start-of-packet with testinput no2 should return processed at position 5', () => {
                const mockSequence = 'bvwbjplbgvbhsrlpgdmjqwftvncz';

                const startOfPacketValue = startOfMessageType(START_OF_PACKET, mockSequence);

                expect(startOfPacketValue).toBe(5);

            });

            test('start-of-packet with testinput no3 should return processed at position 6', () => {
                const mockSequence = 'nppdvjthqldpwncqszvftbrmjlhg';

                const startOfPacketValue = startOfMessageType(START_OF_PACKET, mockSequence);

                expect(startOfPacketValue).toBe(6);

            });

            test('start-of-packet with testinput no4 should return processed at position 10', () => {
                const mockSequence = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg';

                const startOfPacketValue = startOfMessageType(START_OF_PACKET, mockSequence);

                expect(startOfPacketValue).toBe(10);

            });
            test('start-of-packet with testinput no4 should return processed at position 11', () => {
                const mockSequence = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw';

                const startOfPacketValue = startOfMessageType(START_OF_PACKET, mockSequence);

                expect(startOfPacketValue).toBe(11);

            });
    })

    describe('Part2', () => {
            test('start-of-packet with testinput no1 should return processed at position 19', () => {
                const mockSequence = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb';

                const startOfMessage = startOfMessageType(START_OF_MESSAGE, mockSequence);

                expect(startOfMessage).toBe(19);

            });

            test('start-of-packet with testinput no2 should return processed at position 23', () => {
                const mockSequence = 'bvwbjplbgvbhsrlpgdmjqwftvncz';

                const startOfMessage = startOfMessageType(START_OF_MESSAGE, mockSequence);

                expect(startOfMessage).toBe(23);

            });

            test('start-of-packet with testinput no3 should return processed at position 23', () => {
                const mockSequence = 'nppdvjthqldpwncqszvftbrmjlhg';

                const startOfMessage = startOfMessageType(START_OF_MESSAGE, mockSequence);

                expect(startOfMessage).toBe(23);

            });

            test('start-of-packet with testinput no4 should return processed at position 29', () => {
                const mockSequence = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg';

                const startOfMessage = startOfMessageType(START_OF_MESSAGE, mockSequence);

                expect(startOfMessage).toBe(29);

            });
            test('start-of-packet with testinput no4 should return processed at position 26', () => {
                const mockSequence = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw';

                const startOfMessage = startOfMessageType(START_OF_MESSAGE, mockSequence);

                expect(startOfMessage).toBe(26);

            });
    })



    test('Part 2 answer => 4 ranges are overlapping', () => {

    });
});
