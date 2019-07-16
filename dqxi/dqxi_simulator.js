/*
 *	
 * This file...
*/

/*
* This function ...
*/
function init(){
	//draw all the skill trees

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
function hidePopup()
{
	document.getElementById(selectedPopup).style.display = "none";
}


/*
* This function...
*/
function selectTab(event)
{
    var clicked, selected_main_grid;
	
    clicked = event.target || event.srcElement;
	
	if(clicked == (document.getElementById("nav_tab_Hero")))
	{
		selected_main_grid = "main_grid_Hero";
		hideSkillTree();
        showSkillTree(selected_main_grid);
	}
	else if(clicked == nav_tab_Erik)
	{
		selected_main_grid = "main_grid_Erik";
		hideSkillTree();
        showSkillTree(selected_main_grid);
	}
    else if(clicked == nav_tab_Veronica)
	{
		selected_main_grid = "main_grid_Veronica";
		hideSkillTree();
        showSkillTree(selected_main_grid);
	}
    else if(clicked == nav_tab_Serena)
	{
		selected_main_grid = "main_grid_Serena";
		hideSkillTree();
        showSkillTree(selected_main_grid);
	}
    else if(clicked == nav_tab_Sylvando)
	{
		selected_main_grid = "main_grid_Sylvando";
		hideSkillTree();
        showSkillTree(selected_main_grid);
	}
    else if(clicked == nav_tab_Jade)
	{
		selected_main_grid = "main_grid_Jade";
		hideSkillTree();
        showSkillTree(selected_main_grid);
	}
    else if(clicked == nav_tab_Rab)
	{
		selected_main_grid = "main_grid_Rab";
		hideSkillTree();
        showSkillTree(selected_main_grid);
	}
    else if(clicked == nav_tab_Eight)
	{
		selected_main_grid = "main_grid_Eight";
		hideSkillTree();
        showSkillTree(selected_main_grid);
	}
}//close selectTab(e)


/*
 * This function...
*/
function showPopup()
{
	var clicked;

	clicked = e.target || e.srcElement;

	if(clicked == (document.getElementById('game_progress_act1_button'))){
		document.getElementById('game_progress_act1_popup').style.display = "block";
	}
	else if(clicked == (document.getElementById('game_progress_act2_button'))){
		document.getElementById('game_progress_act2_popup').style.display = "block";
	}
	else if(clicked == (document.getElementById('game_progress_act3_button'))){
		document.getElementById('game_progress_act3_popup').style.display = "block";
	}
	else{
		/*error*/
	}
	
}


/*
 * This function shows the currently selected skill tree by setting the 
 * display style of the grid it is in to block
*/
function showSkillTree(selected_main_grid)
{
    document.getElementById(selected_main_grid).style.display = 'block';
}//close showSkillTree(selected_main_grid)

/*
 * This function hides the currently displayed skill tree by using a loop to
 * set the display style of the grid every skill tree is in to none.
 */
function hideSkillTree()
{
    // Hide all elements with class="main_grid"
    let main_grid_list = document.getElementsByClassName("main_grid");

    for (let i = 0; i < main_grid_list.length; i++) {
        main_grid_list[i].style.display = "none";
    }

	//following line could replace above code in theory, but might not work in practice
    //document.getElementById(current_main_grid).style.display = 'none';
}//close hideSkillTree()