import { buildSum, buildTree, findLowest } from './utils';

const mockData = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

describe('Day7', () => {

    describe('Part1', () => {

        test('Find all of the directories with a total size of at most 100000. What is the sum of the total sizes of those directories?', () => {
            const directories = buildTree(mockData.split('\n'));

            expect(buildSum(directories)).toBe(95437);
        });

    })

    describe('Part2', () => {

        test(
            'Find the smallest directory that, if deleted, would free up enough space on the filesystem to run the update. What is the total size of that directory?', () => {
                const directories = buildTree(mockData.split('\n'));

                expect(findLowest(directories)).toBe(24933642);
            }
        );
    })



});
