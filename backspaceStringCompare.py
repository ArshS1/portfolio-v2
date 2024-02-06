import unittest

class testingCall(unittest.TestCase):
    def mainCall( self ):
        solInstance = Solution()
        self.assertEqual( solInstance.backspaceCompare( "ac#d" , "ab#d" ), True )
        self.assertEqual( solInstance.backspaceCompare( "#abcd#" , "abc" ), True )
        self.assertEqual( solInstance.backspaceCompare( "abc#" , "abcc#" ), False )
        print("All test cases passed")

# Time: O(N)
# Space: O(N)

# create new strings after removing i - 1, when a # is found
class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        newS, newT = [], []

        for i in range(len(s)):
            if s[i] == '#': 
                if len(newS) > 0: newS.pop()
            else:
                newS.append(s[i])
        for i in range(len(t)):
            if t[i] == '#': 
                if len(newT) > 0: newT.pop()
            else:
                newT.append(t[i])
        
        return newS == newT

callingTester = testingCall()
callingTester.mainCall()
