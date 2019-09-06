/*
 *	
 * This file...
*/


/*
* This function ...
*/
function init(){
	//have the tab for the Hero's skill tree open by default
	document.getElementById("nav_tab_Luminary").click();
}// close init


/*
* This function ...
*/
function changeLevel()
{
	// store old level for comparison to new level
	let oldLevel = level;

	// update to new level
	level = +(levelDropdown.value);

	// count the number of points used
	var pointsUsed = maxPoints - remainingPoints;
	
	// if the new level is lower than the old one, see if the amount of skill points used was too high for that level, and reset skill points if so
	if(level < oldLevel)
	{
		// calculate max points for our new level
		calculateSkillPoints();

		// if more points than the new level has available were used, reset skill points
		if(pointsUsed > maxPoints)
		{
			resetSkillPoints();
		}
		else
		{
			remainingPoints = maxPoints - pointsUsed;
			updatePointsLabels();
		}
	}
	else
	{
		// if the new level is higher than (or equal to) the previous level, just add more skill points
		calculateSkillPoints();
		remainingPoints = maxPoints - pointsUsed;
		updatePointsLabels();
	}

}//close changeLevel()


/*
* This function...
*/
function selectTab(clicked)
{
	if(clicked === "nav_tab_Luminary")
	{
		hideSkillTrees();
        showSkillTree("main_grid_Luminary");
	}
	else if(clicked === "nav_tab_Erik")
	{
		hideSkillTrees();
        showSkillTree("main_grid_Erik");
	}
    else if(clicked === "nav_tab_Veronica")
	{
		hideSkillTrees();
        showSkillTree("main_grid_Veronica");
	}
    else if(clicked === "nav_tab_Serena")
	{
		hideSkillTrees();
        showSkillTree("main_grid_Serena");
	}
    else if(clicked === "nav_tab_Sylvando")
	{
		hideSkillTrees();
        showSkillTree("main_grid_Sylvando");
	}
    else if(clicked === "nav_tab_Jade")
	{
		hideSkillTrees();
        showSkillTree("main_grid_Jade");
	}
    else if(clicked === "nav_tab_Rab")
	{
		hideSkillTrees();
        showSkillTree("main_grid_Rab");
	}
    else if(clicked === "nav_tab_Eight")
	{
		hideSkillTrees();
        showSkillTree("main_grid_Eight");
	}
	else
	{
		throw new Error("Tab Error");
	}
}//close selectTab(event)


/*
 * This function finds which popup button was clicked and opens the popup box
 * corresponding to that button by displaying it through setting its display
 * style to block
*/
function openPopup(clicked)
{
	if(clicked === "game_progress_act1_button")
	{
		document.getElementById("game_progress_act1_popup").style.display = "block";
	}
	else if(clicked === "game_progress_act2_button")
	{
		document.getElementById("game_progress_act2_popup").style.display = "block";
	}
	else if(clicked === "game_progress_act3_button")
	{
		document.getElementById("game_progress_act3_popup").style.display = "block";
	}
	else
	{
		throw new Error("Popup Error");
	}
	
} //close showPopup()


/*
 * This function closes the popup box by hiding it through setting the display
 * style of the grid for each of the three popup boxes to none.
*/
function closePopup()
{
	document.getElementById("game_progress_act1_popup").style.display = 'none';
	document.getElementById("game_progress_act2_popup").style.display = 'none';
	document.getElementById("game_progress_act3_popup").style.display = 'none';
} //close hidePopup()


/*
 * This function shows the currently selected skill tree by setting the 
 * display style of the grid it is in to block
*/
function showSkillTree(selected_main_grid)
{
    document.getElementById(selected_main_grid).style.display = 'grid';
}//close showSkillTree(selected_main_grid)


/*
 * This function hides the currently displayed skill tree by using a loop to
 * set the display style of the grid every skill tree is in to none.
 */
function hideSkillTrees()
{
    // Hide all elements with class="main_grid"
    let main_grid_list = document.getElementsByClassName("main_grid");

    for (let i = 0; i < main_grid_list.length; i++)
	{
        main_grid_list[i].style.display = "none";
    }

	/*
	document.getElementById("main_grid_Luminary").style.display = 'none';
	document.getElementById("main_grid_Erik").style.display = 'none';
	document.getElementById("main_grid_Veronica").style.display = 'none';
	document.getElementById("main_grid_Serena").style.display = 'none';
	document.getElementById("main_grid_Sylvando").style.display = 'none';
	*/

	//following line could replace above code in theory, but might not work in practice
    //document.getElementById(current_main_grid).style.display = 'none';
}//close hideSkillTree()