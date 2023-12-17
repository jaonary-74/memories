from rice_cooker import RiceCooker, plug_in, unplug
import unittest

class RiceCookerTest(unittest.TestCase):
    def setUp(self):
        self.rice_cooker = RiceCooker()

    def test_plug_in(self):
        # Cas où le Rice Cooker n'est pas déjà branché
        self.assertEqual(self.rice_cooker.is_plugged, true)
        self.rice_cooker.is_plugged, error = plug_in(self.rice_cooker.is_plugged)
        self.assertEqual(self.rice_cooker.is_plugged, True)
        self.assertIsNone(error)

        # Cas où le Rice Cooker est déjà branché
        self.rice_cooker.is_plugged, error = plug_in(self.rice_cooker.is_plugged)
        self.assertEqual(self.rice_cooker.is_plugged, True)
        self.assertIsInstance(error, ValueError)

    def test_unplug(self):
        # Cas où le Rice Cooker est branché et n'est pas en cours d'utilisation
        self.rice_cooker.is_plugged = True
        self.rice_cooker.is_cooking = False
        self.assertEqual(self.rice_cooker.is_plugged, True)
        self.assertEqual(self.rice_cooker.is_cooking, False)
        self.rice_cooker.is_plugged, error = unplug(self.rice_cooker.is_plugged, self.rice_cooker.is_cooking)
        self.assertEqual(self.rice_cooker.is_plugged, False)
        self.assertIsNone(error)

        # Cas où le Rice Cooker est déjà débranché
        self.rice_cooker.is_plugged = False
        self.assertEqual(self.rice_cooker.is_plugged, False)
        self.rice_cooker.is_plugged, error = unplug(self.rice_cooker.is_plugged, self.rice_cooker.is_cooking)
        self.assertEqual(self.rice_cooker.is_plugged, False)
        self.assertIsInstance(error, ValueError)

        # Cas où le Rice Cooker est en cours d'utilisation
        self.rice_cooker.is_plugged = True
        self.rice_cooker.is_cooking = True
        self.assertEqual(self.rice_cooker.is_plugged, True)
        self.assertEqual(self.rice_cooker.is_cooking, True)
        self.rice_cooker.is_plugged, error = unplug(self.rice_cooker.is_plugged, self.rice_cooker.is_cooking)
        self.assertEqual(self.rice_cooker.is_plugged, True)
        self.assertIsInstance(error, ValueError)

    # Tests pour les autres fonctions

if __name__ == '__main__':
    unittest.main()